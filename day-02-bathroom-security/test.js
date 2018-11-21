const assert = require('assert');

const bathroom = require('./bathroom');

describe('Day 2: Bathroom Security', () => {
  it('should properly calculate bathroom code', () => {
    const sequence =
      `ULL
       RRDDD
       LURDL
       UUUUD`;

    assert.strictEqual(bathroom(sequence), '1985');
  });
});
