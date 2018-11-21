const isPossibleTriangle = (a, b, c) => a + b > c;

const countValidTriangles = (input) => {
  return input
    .split('\n')
    .map((row) => {
      const sides = row
        .trim()
        .split(' ')
        .filter((x) => x.length)
        .map((x) => parseInt(x))
        .sort((a, b) => a - b);

      return {
        a: sides[0],
        b: sides[1],
        c: sides[2],
      };
    })
    .map(({ a, b, c }) => isPossibleTriangle(a, b, c))
    .filter((t) => t)
    .length;
};

module.exports = {
  isPossibleTriangle,
  countValidTriangles,
};
