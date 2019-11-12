const getNextRow = (row) => {
  const currentRow = `.${row}.`;
  const nextRow = [];

  for (let i = 1; i < currentRow.length - 1; i++) {
    const parts = currentRow.slice(i - 1, i + 2);
    const trapRules = ['^^.', '.^^', '^..', '..^'];

    nextRow.push(trapRules.includes(parts) ? '^' : '.');
  }

  return nextRow.join('');
};

const countTiles = (row) => row.split('').filter((x) => x === '.').length;

module.exports = (seed, iterations = 40) => {
  let currentRow = seed;
  let numberOfSafeTiles = countTiles(currentRow);

  for (let i = 0; i < iterations - 1; i++) {
    const nextRow = getNextRow(currentRow);

    numberOfSafeTiles += countTiles(nextRow);
    currentRow = nextRow;
  }

  return numberOfSafeTiles;
};
