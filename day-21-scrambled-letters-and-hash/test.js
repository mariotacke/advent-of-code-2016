const assert = require('assert');

const scramble = require('./scramble');
const scramble2 = require('./scramble2');

describe('Day 21: Scrambled Letters and Hash', () => {
  it('should scramble abcde', () => {
    const instructions =
      `swap position 4 with position 0
      swap letter d with letter b
      reverse positions 0 through 4
      rotate left 1 step
      move position 1 to position 4
      move position 3 to position 0
      rotate based on position of letter b
      rotate based on position of letter d`;

    assert.strictEqual(scramble(instructions, 'abcde'), 'decab');
  });

  describe('Part Two', () => {
    it('should swap position X with position Y', () => {
      assert.strictEqual(scramble2('should swap position 4 with position 0', 'ebcda'), 'abcde');
    });

    it('should swap letter X with letter Y', () => {
      assert.strictEqual(scramble2('swap letter d with letter b', 'edcba'), 'ebcda');
    });

    it('should reverse positions X through Y', () => {
      assert.strictEqual(scramble2('reverse positions 0 through 4', 'abcde'), 'edcba');
    });

    it('should rotate left/right X steps', () => {
      assert.strictEqual(scramble2('rotate left 1 step', 'bcdea'), 'abcde');
    });

    it('should move position X to position Y', () => {
      assert.strictEqual(scramble2('move position 1 to position 4', 'bdeac'), 'bcdea');
      assert.strictEqual(scramble2('move position 3 to position 0', 'abdec'), 'bdeac');
    });

    it('should rotate based on position of letter X', () => {
      assert.strictEqual(scramble2('rotate based on position of letter b', 'ecabd'), 'abdec');
      assert.strictEqual(scramble2('rotate based on position of letter d', 'decab'), 'ecabd');
    });

    it('should unscramble decab via sample instructions', () => {
      const instructions =
        `swap position 4 with position 0
        swap letter d with letter b
        reverse positions 0 through 4
        rotate left 1 step
        move position 1 to position 4
        move position 3 to position 0
        rotate based on position of letter b
        rotate based on position of letter d`;

      assert.strictEqual(scramble2(instructions, 'decab'), 'abcde');
    });
  });
});
