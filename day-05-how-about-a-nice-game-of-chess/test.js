const assert = require('assert');

const chess = require('./chess');
const chess2 = require('./chess2');

describe('Day 5: How About a Nice Game of Chess?', function () {
  this.timeout(60000);

  // long execution time; calculating hashes
  it.skip('should calculate door password from id', () => {
    assert.strictEqual(chess('abc'), '18f47a30');
  });

  describe('Part Two', () => {
    // long execution time; calculating hashes
    it.skip('should calculate second door password from id', () => {
      assert.strictEqual(chess2('abc'), '05ace8e3');
    });
  });
});
