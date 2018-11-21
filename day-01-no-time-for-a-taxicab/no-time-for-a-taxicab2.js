const noTimeForATaxicab = (input) => {
  let output;

  const pastLocations = {};

  const walkPoints = (p1, p2) => {
    const xLength = p2.x - p1.x;
    const yLength = p2.y - p1.y;

    if (p1.y === p2.y) {
      for (let t = 1; t <= Math.abs(xLength); t++) {
        const x = p1.x + t * Math.sign(xLength);

        if (!pastLocations[`${x}:${p1.y}`]) {
          pastLocations[`${x}:${p1.y}`] = 1;
        }

        if (pastLocations[`${x}:${p1.y}`] === 2) {
          return { x, y: p1.y };
        } else {
          pastLocations[`${x}:${p1.y}`] += 1;
        }
      }
    }

    if (p1.x === p2.x) {
      for (let t = 1; t <= Math.abs(yLength); t++) {
        const y = p1.y + t * Math.sign(yLength);

        if (!pastLocations[`${p1.x}:${y}`]) {
          pastLocations[`${p1.x}:${y}`] = 1;
        }

        if (pastLocations[`${p1.x}:${y}`] === 2) {
          return { x: p1.x, y };
        } else {
          pastLocations[`${p1.x}:${y}`] += 1;
        }
      }
    }
  };

  input
    .split(', ')
    .map((x) => {
      return {
        direction: x[0],
        steps: parseInt(x.substring(1, x.length)),
      };
    })
    .reduce((accumulator, currentValue) => {
      let heading = accumulator.heading;
      let x = 0;
      let y = 0;

      switch (heading) {
        case 'N':
          heading = currentValue.direction === 'L' ? 'W' : 'E';
          x += currentValue.steps * (heading === 'W' ? -1 : 1);
          break;
        case 'E':
          heading = currentValue.direction === 'L' ? 'N' : 'S';
          y += currentValue.steps * (heading === 'S' ? -1 : 1);
          break;
        case 'S':
          heading = currentValue.direction === 'L' ? 'E' : 'W';
          x += currentValue.steps * (heading === 'W' ? -1 : 1);
          break;
        case 'W':
          heading = currentValue.direction === 'L' ? 'S' : 'N';
          y += currentValue.steps * (heading === 'S' ? -1 : 1);
          break;
      }

      const start = { x: accumulator.x, y: accumulator.y };
      const end = { x: accumulator.x + x, y: accumulator.y + y };

      const cross = walkPoints(start, end);

      if (cross && !output) {
        output = { x: cross.x, y: cross.y };
      }

      accumulator.heading = heading;
      accumulator.x += x;
      accumulator.y += y;

      return accumulator;
    }, { heading: 'N', x: 0, y: 0 });

  return Math.abs(output.x) + Math.abs(output.y);
};

module.exports = noTimeForATaxicab;
