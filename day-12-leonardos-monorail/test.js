const assert = require('assert');

const assembunny = require('./assembunny');

describe('Day 12: Leonardo\'s Monorail', () => {
  it('should execute assembunny', () => {
    const instructions =
      `cpy 41 a
       inc a
       inc a
       dec a
       jnz a 2
       dec a`;

    assert.strictEqual(assembunny(instructions).a, 42);
  });
});
