const assert = require('assert');

const maze = require('./maze');

describe('Day 13: A Maze of Twisty Little Cubicles', () => {
  it('should find fewest number of steps', () => {
    const favoriteNumber = '10';
    const targetDestination = '7,4';

    assert.strictEqual(maze(favoriteNumber, targetDestination), 11);
  });
});
