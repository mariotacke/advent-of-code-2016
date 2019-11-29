const assert = require('assert');

const crack = require('./crack');

describe('Day 23: Safe Cracking', () => {
  it('should execute extended assembunny', () => {
    const instructions =
      `cpy 2 a
       tgl a
       tgl a
       tgl a
       cpy 1 a
       dec a
       dec a`;

    assert.strictEqual(crack(instructions).a, 3);
  });
});
