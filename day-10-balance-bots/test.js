const assert = require('assert');

const bots = require('./bots');
const bots2 = require('./bots2');

describe('Day 10: Balance Bots', () => {
  it('should determine bot', () => {
    const instructions =
      `value 5 goes to bot 2
       bot 2 gives low to bot 1 and high to bot 0
       value 3 goes to bot 1
       bot 1 gives low to output 1 and high to bot 0
       bot 0 gives low to output 2 and high to output 0
       value 2 goes to bot 2`;

    assert.strictEqual(bots(instructions, 2, 5), 2);
  });

  describe('Part Two', () => {
    it('should determine output bin multiplication', () => {
      const instructions =
        `value 5 goes to bot 2
         bot 2 gives low to bot 1 and high to bot 0
         value 3 goes to bot 1
         bot 1 gives low to output 1 and high to bot 0
         bot 0 gives low to output 2 and high to output 0
         value 2 goes to bot 2`;

      assert.strictEqual(bots2(instructions), 30);
    });
  });
});
