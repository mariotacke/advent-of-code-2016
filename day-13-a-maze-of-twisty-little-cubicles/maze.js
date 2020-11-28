function isOpenSpace(x, y, seed) {
  return Number(x * x + 3 * x + 2 * x * y + y + y * y + seed)
    .toString(2).split('')
    .reduce((a, b) => a + parseInt(b), 0) % 2 === 0;
}

function shortestPath(map, from, to) {
  let paths = [[[...from]]];
  let nextPaths = [];
  let visited = new Set();

  while (paths.length) {
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

    for (let i = 0; i < nextPaths.length; i++) {
      const path = nextPaths[i];
      const [px, py] = path.slice(-1)[0];
      const [tx, ty] = to;

      if (px === tx && py === ty) {
        return path.length - 1;
      }
    }
  }
}

// eslint-disable-next-line no-unused-vars
function print(maze) {
  console.log(maze.map((row) => row.map((t) => t ? '.' : '#').join('')).join('\n'));
}

module.exports = (input, destination) => {
  const favoriteNumber = parseInt(input);
  const [tx, ty] = destination.split(',').map((value) => parseInt(value));

  const maze = Array
    .from({ length: 50 })
    .map((_, y) => Array
      .from({ length: 50 })
      .map((_, x) => isOpenSpace(x, y, favoriteNumber)));

  return shortestPath(maze, [1, 1], [tx, ty]);
};
