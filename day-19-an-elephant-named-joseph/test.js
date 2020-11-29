const assert = require('assert');

const elephant = require('./elephant');
const elephant2 = require('./elephant2');

describe('Day 19: An Elephant Named Joseph', () => {
  it('should determine which elf gets all the presents', () => {
    const numberOfElves = 5;

    assert.strictEqual(elephant(numberOfElves), 3);
  });

  describe('Part Two', () => {
    it('should determine which elf gets all the presents (n = 5)', () => {
      const numberOfElves = 5;

      assert.strictEqual(elephant2(numberOfElves), 2);
    });

    it('should determine which elf gets all the presents (n = 9)', () => {
      const numberOfElves = 9;

      assert.strictEqual(elephant2(numberOfElves), 9);
    });
  });
});
