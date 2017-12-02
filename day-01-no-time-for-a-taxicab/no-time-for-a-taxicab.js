const noTimeForATaxicab = (input) => {
  const output = input
    .split(', ')
    .map((x) => {
      return {
        direction: x[0],
        steps: parseInt(x.substring(1, x.length)),
      };
    })
    .reduce((accumulator, currentValue) => {
      switch (accumulator.heading) {
        case 'N':
          accumulator.heading = currentValue.direction === 'L' ? 'W' : 'E';
          accumulator.x += currentValue.steps * (accumulator.heading === 'W' ? -1 : 1);
          break;
        case 'E':
          accumulator.heading = currentValue.direction === 'L' ? 'N' : 'S';
          accumulator.y += currentValue.steps * (accumulator.heading === 'S' ? -1 : 1);
          break;
        case 'S':
          accumulator.heading = currentValue.direction === 'L' ? 'E' : 'W';
          accumulator.x += currentValue.steps * (accumulator.heading === 'W' ? -1 : 1);
          break;
        case 'W':
          accumulator.heading = currentValue.direction === 'L' ? 'S' : 'N';
          accumulator.y += currentValue.steps * (accumulator.heading === 'S' ? -1 : 1);
          break;
      }

      return accumulator;
    }, { heading: 'N', x: 0, y: 0 });
    
    return Math.abs(output.x) + Math.abs(output.y);
};

module.exports = noTimeForATaxicab;