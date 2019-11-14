const assert = require('assert');

const firewall = require('./firewall');

describe('Day 20: Firewall Rules', () => {
  it('should compute lowest-valued IP that is not blocked', () => {
    const blacklist =
      `5-8
       0-2
       4-7`;

    assert.strictEqual(firewall(blacklist), 3);
  });
});
