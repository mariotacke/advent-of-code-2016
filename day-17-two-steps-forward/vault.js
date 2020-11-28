const crypto = require('crypto');

const md5 = (value) => crypto.createHash('md5').update(value).digest('hex');

function getMoves(hash) {
  return hash
    .slice(0, 4)
    .split('')
    .map((direction) => /[bcdef]/.test(direction));
}

const vectors = {
  U: [0, -1],
  D: [0, 1],
  L: [-1, 0],
  R: [1, 0],
};

function move(sequence) {
  return sequence.reduce(([px, py], instruction) => {
    const [dx, dy] = vectors[instruction];

    return [px + dx, py + dy];
  }, [0, 0]);
}

function withinField([px, py], [maxX, maxY], direction) {
  const [dx, dy] = vectors[direction];

  return px + dx >= 0 && px + dx <= maxX && py + dy >= 0 && py + dy <= maxY;
}

function search(seed, to) {
  const [, D, , R] = getMoves(md5(seed));
  let paths = [];
  let nextPaths = [];

  // U and L impossible at start
  if (D) { paths.push(['D']); }
  if (R) { paths.push(['R']); }

  while (paths.length) {
    nextPaths = [];

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const [px, py] = move(path);

      if (px === to[0] && py === to[1]) {
        return path.join('');
      }

      const [U, D, L, R] = getMoves(md5(`${seed}${path.join('')}`));

      U && withinField([px, py], to, 'U') && nextPaths.push([...path, 'U']);
      D && withinField([px, py], to, 'D') && nextPaths.push([...path, 'D']);
      L && withinField([px, py], to, 'L') && nextPaths.push([...path, 'L']);
      R && withinField([px, py], to, 'R') && nextPaths.push([...path, 'R']);
    }

    paths = nextPaths;
  }
}

module.exports = (seed, target = [3, 3]) => {
  return search(seed, target);
};
