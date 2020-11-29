const assert = require('assert');

const rtg = require('./rtg');

describe('Day 11: Radioisotope Thermoelectric Generators', () => {
  it('should calculate steps to collect all objects at the fourth floor', () => {
    const input =
      `The first floor contains a hydrogen-compatible microchip and a lithium-compatible microchip.
       The second floor contains a hydrogen generator.
       The third floor contains a lithium generator.
       The fourth floor contains nothing relevant.`;

    assert.strictEqual(rtg(input), 11);
  });
});
