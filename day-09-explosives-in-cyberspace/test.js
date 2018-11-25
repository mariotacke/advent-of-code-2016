const assert = require('assert');

const decompress = require('./decompress');
const decompress2 = require('./decompress2');

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

  describe('Part Two', () => {
    it('should determine decompressed length of `(3x3)XYZ`', () => {
      assert.strictEqual(decompress2('(3x3)XYZ'), 9);
    });

    it('should determine decompressed length of `X(8x2)(3x3)ABCY`', () => {
      assert.strictEqual(decompress2('X(8x2)(3x3)ABCY'), 20);
    });

    it('should determine decompressed length of `(27x12)(20x12)(13x14)(7x10)(1x12)A`', () => {
      assert.strictEqual(decompress2('(27x12)(20x12)(13x14)(7x10)(1x12)A'), 241920);
    });

    it('should determine decompressed length of `(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN`', () => {
      assert.strictEqual(decompress2('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN'), 445);
    });
  });
});
