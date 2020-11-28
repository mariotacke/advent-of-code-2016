const assert = require('assert');

const vault = require('./vault');

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
});
