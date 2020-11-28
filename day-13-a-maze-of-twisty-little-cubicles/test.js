const assert = require('assert');

const maze = require('./maze');
const maze2 = require('./maze2');

describe('Day 13: A Maze of Twisty Little Cubicles', () => {
  it('should find fewest number of steps', () => {
    const favoriteNumber = '10';
    const targetDestination = '7,4';

    assert.strictEqual(maze(favoriteNumber, targetDestination), 11);
  });

  describe('Part Two', () => {
    it('should find number of locations reachable in 50 steps', () => {
      const favoriteNumber = '10';
      const numberOfSteps = 50;

      assert.strictEqual(maze2(favoriteNumber, numberOfSteps), 151);
    });
  });
});
