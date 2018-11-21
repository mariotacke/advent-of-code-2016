const isPossibleTriangle = (a, b, c) => a + b > c;

const countValidTriangles = (input) => {
  const columns = input
    .split('\n')
    .map((row) => {
      const parts = row
        .trim()
        .split(' ')
        .filter((x) => x.length)
        .map((x) => parseInt(x));

      return [
        parts[0],
        parts[1],
        parts[2],
      ];
    });

  const triangles = [];

  for (let i = 0; i < columns.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      triangles.push([columns[i][j], columns[i + 1][j], columns[i + 2][j]]);
    }
  }

  return triangles
    .map((triangle) => {
      const [a, b, c] = triangle.sort((a, b) => a - b);

      return isPossibleTriangle(a, b, c);
    })
    .filter((x) => x)
    .length;
};

module.exports = {
  isPossibleTriangle,
  countValidTriangles,
};
