const assert = require('assert');

const { isPossibleTriangle, countValidTriangles } = require('./triangle');

describe('Day 3: Squares With Three Sides', () => {
  it('should determine if triangle is possible', () => {
    assert.strictEqual(isPossibleTriangle(5, 10, 25), false);
    assert.strictEqual(isPossibleTriangle(3, 4, 6), true);
  });

  it('should count valid triangles', () => {
    const list =
      `5 10 25
       3 4 6`;

    assert.strictEqual(countValidTriangles(list), 1);
  });
});
