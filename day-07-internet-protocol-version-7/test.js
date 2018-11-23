const assert = require('assert');

const { supportsTls } = require('./ipv7');

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
});
