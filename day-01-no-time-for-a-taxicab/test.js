const assert = require('assert');

const noTimeForATaxicab = require('./no-time-for-a-taxicab');
const noTimeForATaxicab2 = require('./no-time-for-a-taxicab2');

describe('Day 1: No Time for a Taxicab', () => {
  it('should properly calculate R2, L3', () => {
    assert.strictEqual(noTimeForATaxicab('R2, L3'), 5);
  });

  it('should properly calculate R2, R2, R2', () => {
    assert.strictEqual(noTimeForATaxicab('R2, R2, R2'), 2);
  });

  it('should properly calculate R5, L5, R5, R3', () => {
    assert.strictEqual(noTimeForATaxicab('R5, L5, R5, R3'), 12);
  });

  describe('Part Two', () => {
    it('should properly calculate R8, R4, R4, R8', () => {
      assert.strictEqual(noTimeForATaxicab2('R8, R4, R4, R8'), 4);
    });
  });
});
