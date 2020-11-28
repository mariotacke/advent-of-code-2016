const assert = require('assert');

const hash = require('./hash');
const hash2 = require('./hash2');

describe('Day 14: One-Time Pad', () => {
  it.skip('should find index of 64th one-time pad key', () => {
    const salt = 'abc';

    assert.strictEqual(hash(salt), 22728);
  }).timeout(30000);

  describe('Part Two', () => {
    it.skip('should find index of 64th one-time pad key (stretched)', () => {
      const salt = 'abc';

      assert.strictEqual(hash2(salt), 22551);
    }).timeout(90000);
  });
});
