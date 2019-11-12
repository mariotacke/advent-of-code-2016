const assert = require('assert');

const elephant = require('./elephant');

describe('Day 19: An Elephant Named Joseph', () => {
  it('should determine which elf gets all the presents', () => {
    const numberOfElves = 5;

    assert.strictEqual(elephant(numberOfElves), 3);
  });
});
