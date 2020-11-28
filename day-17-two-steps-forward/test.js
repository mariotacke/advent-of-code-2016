const assert = require('assert');

const vault = require('./vault');
const vault2 = require('./vault2');

describe('Day 17: Two Steps Forward', () => {
  it('should find shortest path to vault (ihgpwlah)', () => {
    const seed = 'ihgpwlah';

    assert.strictEqual(vault(seed), 'DDRRRD');
  });

  it('should find shortest path to vault (kglvqrro)', () => {
    const seed = 'kglvqrro';

    assert.strictEqual(vault(seed), 'DDUDRLRRUDRD');
  });

  it('should find shortest path to vault (ulqzkmiv)', () => {
    const seed = 'ulqzkmiv';

    assert.strictEqual(vault(seed), 'DRURDRUDDLLDLUURRDULRLDUUDDDRR');
  });

  describe('Part Two', () => {
    it('should find longest path to vault (ihgpwlah)', () => {
      const seed = 'ihgpwlah';

      assert.strictEqual(vault2(seed), 370);
    });

    it('should find longest path to vault (kglvqrro)', () => {
      const seed = 'kglvqrro';

      assert.strictEqual(vault2(seed), 492);
    });

    it('should find longest path to vault (ulqzkmiv)', () => {
      const seed = 'ulqzkmiv';

      assert.strictEqual(vault2(seed), 830);
    });
  });
});
