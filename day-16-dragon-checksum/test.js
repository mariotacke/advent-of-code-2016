const assert = require('assert');

const checksum = require('./checksum');

describe('Day 16: Dragon Checksum', () => {
  it('should calculate checksum of 10000', () => {
    const initialState = '10000';
    const diskLength = 20;

    assert.strictEqual(checksum(initialState, diskLength), '01100');
  });
});
