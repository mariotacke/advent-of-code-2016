module.exports = (input) => {
  const ranges = input
    .split('\n')
    .map((line) => {
      return line
        .split('-')
        .map((range) => parseInt(range));
    })
    .sort((a, b) => a[0] - b[0]);

  let lowestValuedIp = 0;

  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];

    if (start <= lowestValuedIp && end > lowestValuedIp) {
      lowestValuedIp = end + 1;
    }
  }

  return lowestValuedIp;
};
