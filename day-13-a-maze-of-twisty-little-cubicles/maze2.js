function isOpenSpace(x, y, seed) {
  return Number(x * x + 3 * x + 2 * x * y + y + y * y + seed)
    .toString(2).split('')
    .reduce((a, b) => a + parseInt(b), 0) % 2 === 0;
}

function fill(map, from, numberOfSteps) {
  let paths = [[[...from]]];
  let nextPaths = [];
  let visited = new Set([`${[from[0]]},${[from[1]]}`]);
  let steps = 0;

  while (steps++ < numberOfSteps) {
    nextPaths = [];

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const [px, py] = path.slice(-1)[0];

      const moves = [
        [px, py + 1],
        [px + 1, py],
        [px, py - 1],
        [px - 1, py],
      ];

      for (let m = 0; m < moves.length; m++) {
        const [qx, qy] = moves[m];

        if (qx >= 0 && qy >= 0 && map[qy][qx] && !visited.has(`${qx},${qy}`)) {
          nextPaths.push([...path, [qx, qy]]);
          visited.add(`${qx},${qy}`);
        }
      }
    }

    paths = nextPaths;
  }

  return visited.size;
}

// eslint-disable-next-line no-unused-vars
function print(maze) {
  console.log(maze.map((row) => row.map((t) => t ? '.' : '#').join('')).join('\n'));
}

module.exports = (input, maximumNumberOfSteps) => {
  const favoriteNumber = parseInt(input);

  const maze = Array
    .from({ length: 50 })
    .map((_, y) => Array
      .from({ length: 50 })
      .map((_, x) => isOpenSpace(x, y, favoriteNumber)));

  return fill(maze, [1, 1], maximumNumberOfSteps);
};
