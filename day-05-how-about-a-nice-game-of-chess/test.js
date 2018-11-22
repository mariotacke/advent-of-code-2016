const assert = require('assert');

const chess = require('./chess');

describe('Day 5: How About a Nice Game of Chess?', () => {
  // long execution time; calculating hashes
  xit('should calculate door password from id', () => {
    assert.strictEqual(chess('abc'), '18f47a30');
  });

  describe('Part Two', () => {
    // long execution time; calculating hashes
    xit('should calculate second door password from id', () => {
      assert.strictEqual(chess('abc'), '05ace8e3');
    });
  });
});
