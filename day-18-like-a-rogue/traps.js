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

module.exports = (seed, iterations = 40) => {
  const history = [seed];

  for (let i = 0; i < iterations - 1; i++) {
    history.push(getNextRow(history[i]));
  }

  return history
    .reduce((a, b) => a + b.split('').filter((x) => x === '.').length, 0);
};
