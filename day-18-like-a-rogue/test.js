const assert = require('assert');

const traps = require('./traps');

describe('Day 18: Like a Rogue', () => {
  it('should determine number of safe tiles', () => {
    const seed = '.^^.^.^^^^';

    assert.strictEqual(traps(seed, 10), 38);
  });
});
