const assert = require('assert');

const firewall = require('./firewall');
const firewall2 = require('./firewall2');

describe('Day 20: Firewall Rules', () => {
  it('should compute lowest-valued IP that is not blocked', () => {
    const blacklist =
      `5-8
       0-2
       4-7`;

    assert.strictEqual(firewall(blacklist), 3);
  });

  describe('Part Two', () => {
    it('should compute number of allowed IPs', () => {
      const blacklist =
        `5-8
         0-2
         4-7
         12-4294967295`;

      assert.strictEqual(firewall2(blacklist), 4);
    });
  });
});
