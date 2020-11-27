const assert = require('assert');

const duct = require('./duct');

describe('Day 24: Air Duct Spelunking', () => {
  it('should compute fewest number of steps', () => {
    const instructions =
      `###########
       #0.1.....2#
       #.#######.#
       #4.......3#
       ###########`;

    assert.strictEqual(duct(instructions), 14);
  });
});
