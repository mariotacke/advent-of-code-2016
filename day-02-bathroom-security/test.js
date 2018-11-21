const assert = require('assert');

const bathroom = require('./bathroom');
const bathroom2 = require('./bathroom2');

describe('Day 2: Bathroom Security', () => {
  it('should properly calculate bathroom code', () => {
    const sequence =
      `ULL
       RRDDD
       LURDL
       UUUUD`;

    assert.strictEqual(bathroom(sequence), '1985');
  });

  describe('Part Two', () => {
    it('should properly calculate real bathroom code', () => {
      const sequence =
        `ULL
         RRDDD
         LURDL
         UUUUD`;

      assert.strictEqual(bathroom2(sequence), '5DB3');
    });
  });
});
