const assert = require('assert');

const decompress = require('./decompress');

describe('Day 9: Explosives in Cyberspace', () => {
  it('should decompress and determine length of `ADVENT`', () => {
    assert.strictEqual(decompress('ADVENT'), 'ADVENT');
  });

  it('should decompress and determine length of `A(1x5)BC`', () => {
    assert.strictEqual(decompress('A(1x5)BC'), 'ABBBBBC');
  });

  it('should decompress and determine length of `(3x3)XYZ`', () => {
    assert.strictEqual(decompress('(3x3)XYZ'), 'XYZXYZXYZ');
  });

  it('should decompress and determine length of `A(2x2)BCD(2x2)EFG`', () => {
    assert.strictEqual(decompress('A(2x2)BCD(2x2)EFG'), 'ABCBCDEFEFG');
  });

  it('should decompress and determine length of `(6x1)(1x3)A`', () => {
    assert.strictEqual(decompress('(6x1)(1x3)A'), '(1x3)A');
  });

  it('should decompress and determine length of `X(8x2)(3x3)ABCY`', () => {
    assert.strictEqual(decompress('X(8x2)(3x3)ABCY'), 'X(3x3)ABC(3x3)ABCY');
  });
});
