module.exports = (input) => {
  const configuration = input
    .split('\n')
    .map((line) => {
      const match = line
        .trim()
        .match(/(\d+)/g);

      return {
        number: parseInt(match[0]),
        size: parseInt(match[1]),
        initialPosition: parseInt(match[3]),
      };
    });

  for (let i = 0; i <= Infinity; i++) {
    const discPositions = configuration
      .map(({ number, size, initialPosition}) => {
        return (i + initialPosition + number) % size;
      });

    if (discPositions.every((position) => position === 0)) {
      return i;
    }
  }
};
