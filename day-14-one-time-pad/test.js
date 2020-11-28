const assert = require('assert');

const hash = require('./hash');

describe('Day 14: One-Time Pad', () => {
  it.skip('should find index of 64th one-time pad key', () => {
    const salt = 'abc';

    assert.strictEqual(hash(salt), 22728);
  }).timeout(30000);
});
