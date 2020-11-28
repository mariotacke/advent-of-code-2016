const crypto = require('crypto');

const md5 = (value) => crypto.createHash('md5').update(value).digest('hex');
const computeHash = (salt, index) => md5(`${salt}${index}`);

const stretch = (hash, iterations = 2016) => {
  let currentHash = hash;

  for (let i = 0; i < iterations; i++) {
    currentHash = md5(currentHash);
  }

  return currentHash;
};

const hasSequence = (hash, length) => {
  for (let i = 0; i <= hash.length - length; i++) {
    if (hash.slice(i, i + length).split('').every((x) => x === hash[i])) {
      return hash[i];
    }
  }

  return null;
};

module.exports = (salt) => {
  let stretchedHashes = Array
    .from({ length: 1001 })
    .map((_, i) => stretch(computeHash(salt, i)));

  let secret = 0;
  let keys = 0;

  while (keys < 64) {
    const stretchedHash = stretchedHashes.shift();

    stretchedHashes.push(stretch(computeHash(salt, secret + 1000)));

    const character = hasSequence(stretchedHash, 3);

    if (character !== null) {
      for (let i = 0; i < stretchedHashes.length; i++) {
        const next = hasSequence(stretchedHashes[i], 5);

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
