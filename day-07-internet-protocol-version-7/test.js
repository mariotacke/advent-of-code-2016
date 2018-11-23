const assert = require('assert');

const { supportsTls } = require('./ipv7');
const { supportsSsl } = require('./ipv72');

describe('Day 7: Internet Protocol Version 7', () => {
  it('should determine if `abba[mnop]qrst` supports TLS', () => {
    assert.strictEqual(supportsTls('abba[mnop]qrst'), true);
  });

  it('should determine if `abcd[bddb]xyyx` supports TLS', () => {
    assert.strictEqual(supportsTls('abcd[bddb]xyyx'), false);
  });

  it('should determine if `aaaa[qwer]tyui` supports TLS', () => {
    assert.strictEqual(supportsTls('aaaa[qwer]tyui'), false);
  });

  it('should determine if `ioxxoj[asdfgh]zxcvbn` supports TLS', () => {
    assert.strictEqual(supportsTls('ioxxoj[asdfgh]zxcvbn'), true);
  });

  describe('Part Two', () => {
    it('should determine if `aba[bab]xyz` supports SSL', () => {
      assert.strictEqual(supportsSsl('aba[bab]xyz'), true);
    });

    it('should determine if `xyx[xyx]xyx` supports SSL', () => {
      assert.strictEqual(supportsSsl('xyx[xyx]xyx'), false);
    });

    it('should determine if `aaa[kek]eke` supports SSL', () => {
      assert.strictEqual(supportsSsl('aaa[kek]eke'), true);
    });

    it('should determine if `zazbz[bzb]cdb` supports SSL', () => {
      assert.strictEqual(supportsSsl('zazbz[bzb]cdb'), true);
    });
  });
});
