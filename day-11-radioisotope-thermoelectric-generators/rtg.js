function combine(items) {
  const combinations = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const otherElements = items.filter((otherItem) => otherItem !== item);

    combinations.push(items[i]);

    for (let j = 0; j < otherElements.length; j++) {
      const combination = [items[i], otherElements[j]].sort().join(',');

      if (!combinations.includes(combination)) {
        combinations.push(combination);
      }
    }
  }

  return combinations.map((combination) => [...combination.split(',')]);
}

function findPossibleStates({ floor, floors }, types) {
  const possibleStates = [];
  const currentFloor = floors[floor];

  const combinations = combine(currentFloor);

  function isSafe(allFloors) {
    for (let i = 0; i < allFloors.length; i++) {
      const items = allFloors[i].map((item) => types[item]);
      const rtgs = items.filter(({ type }) => type === 'generator');
      const chips = items.filter(({ type }) => type === 'microchip');

      if (rtgs.length) {
        if (!chips.every((chip) => rtgs.some((rtg) => rtg.element === chip.element))) {
          return false;
        }
      }
    }

    return true;
  }

  for (let i = 0; i < combinations.length; i++) {
    const combination = combinations[i];

    // up
    if (floor < floors.length - 1) {
      const nextFloors = [...floors.map((f) => [...f])];

      nextFloors[floor + 1] = [...nextFloors[floor + 1], ...combination].sort();
      nextFloors[floor] = [...nextFloors[floor].filter((item) => !combination.includes(item))].sort();

      if (isSafe(nextFloors)) {
        possibleStates.push({ floor: floor + 1, floors: nextFloors });
      }
    }

    // down
    if (floor > 0) {
      const nextFloors = [...floors.map((f) => [...f])];

      nextFloors[floor - 1] = [...nextFloors[floor - 1], ...combination].sort();
      nextFloors[floor] = [...nextFloors[floor].filter((item) => !combination.includes(item))].sort();

      if (isSafe(nextFloors)) {
        possibleStates.push({ floor: floor - 1, floors: nextFloors });
      }
    }
  }

  return possibleStates;
}

function isDone(state) {
  return state.floors
    .slice(0, state.floors.length - 1)
    .every((floor) => !floor.length);
}

const serializeState = ({ floor, floors }) => {
  return `${floor}\n${floors.map((f) => f.join(',')).join('\n')}`;
};

module.exports = (input) => {
  const initialFloors = input
    .split('\n')
    .map((line) => line.match(/(\w+(-compatible microchip| generator))/g) || []);

  const types = initialFloors.reduce((types, items) => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const element = item.match(/(\w)+/)[0];
      const type = item.indexOf('generator') !== -1 ? 'generator' : 'microchip';

      types[item] = {
        element,
        type,
      };
    }

    return types;
  }, {});

  const initialState = {
    floor: 0,
    floors: initialFloors,
    snapshot: serializeState({ floor: 0, floors: initialFloors }),
  };

  let sequences = [[initialState]];
  const previousStates = new Set();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    let nextSequences = [];

    for (let i = 0; i < sequences.length; i++) {
      const sequence = sequences[i];
      const currentState = sequence.slice(-1)[0];

      const possibleNextStates = findPossibleStates(currentState, types);

      for (let s = 0; s < possibleNextStates.length; s++) {
        const nextState = possibleNextStates[s];
        const serializedNextState = serializeState(nextState);

        if (previousStates.has(serializedNextState)) {
          continue;
        }

        if (isDone(nextState)) {
          return sequence.length;
        } else {
          previousStates.add(serializedNextState);
          nextSequences.push([...sequence, nextState]);
        }
      }
    }

    sequences = nextSequences;
  }
};
