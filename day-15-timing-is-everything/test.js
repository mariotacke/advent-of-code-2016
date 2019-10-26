const assert = require('assert');

const discs = require('./discs');

describe('Day 15: Timing is Everything', () => {
  it('should execute discs', () => {
    const configuration =
      `Disc #1 has 5 positions; at time=0, it is at position 4.
       Disc #2 has 2 positions; at time=0, it is at position 1.`;

    assert.strictEqual(discs(configuration), 5);
  });
});
