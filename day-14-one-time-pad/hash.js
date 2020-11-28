const crypto = require('crypto');

const md5 = (value) => crypto.createHash('md5').update(value).digest('hex');
const computeHash = (salt, index) => md5(`${salt}${index}`);

const hasSequence = (hash, length) => {
  for (let i = 0; i <= hash.length - length; i++) {
    if (hash.slice(i, i + length).split('').every((x) => x === hash[i])) {
      return hash[i];
    }
  }

  return null;
};

module.exports = (salt) => {
  let hashes = Array.from({ length: 1001 }).map((_, i) => computeHash(salt, i));
  let secret = 0;
  let keys = 0;

  while (keys < 64) {
    const hash = hashes.shift();

    hashes.push(computeHash(salt, secret + 1000));

    const character = hasSequence(hash, 3);

    if (character !== null) {
      for (let i = 0; i < hashes.length; i++) {
        const next = hasSequence(hashes[i], 5);

        if (next === character) {
          keys++;

          if (keys === 64) {
            return secret - 1;
          }

          break;
        }
      }
    }

    secret++;
  }
};
