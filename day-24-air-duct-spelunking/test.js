const assert = require('assert');

const duct = require('./duct');
const duct2 = require('./duct2');

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

  describe('Part Two', () => {
    it('should compute fewest number of steps and return path', () => {
      const instructions =
        `###########
         #0.1.....2#
         #.#######.#
         #4.......3#
         ###########`;

      assert.strictEqual(duct2(instructions), 20);
    });
  });
});
