const findNextLowestIp = (ranges, startFrom, endAt) => {
  const nextLowest = ranges
    .find(([start, end]) => start <= startFrom + 1 && end > endAt);

  return nextLowest ? nextLowest[1] + 1 : endAt + 1;
};

module.exports = (input) => {
  const openRanges = [];
  const ranges = input
    .split('\n')
    .map((line) => {
      return line
        .split('-')
        .map((range) => parseInt(range));
    })
    .sort((a, b) => a[0] - b[0]);

  const highestValuedIp = 4294967295;

  let lowestValuedIp = 0;

  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];

    if (end <= lowestValuedIp) {
      continue;
    }

    if (start > lowestValuedIp) {
      openRanges.push([lowestValuedIp, start]);
    }

    lowestValuedIp = findNextLowestIp(ranges, start, end);
  }

  if (lowestValuedIp <= highestValuedIp) {
    openRanges.push([lowestValuedIp, highestValuedIp + 1]);
  }

  return openRanges.reduce((availableIps, [start, end]) => {
    return availableIps + (end - start);
  }, 0);
};
