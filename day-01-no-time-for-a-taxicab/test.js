const assert = require('assert');

const noTimeForATaxicab = require('./no-time-for-a-taxicab');

describe('Day 1: No Time for a Taxicab', () => {
  it('should properly calculate R2, L3', () => {
    assert.equal(5, noTimeForATaxicab('R2, L3'));
  });
  
  it('should properly calculate R2, R2, R2', () => {
    assert.equal(2, noTimeForATaxicab('R2, R2, R2'));
  });
  
  it('should properly calculate R5, L5, R5, R3', () => {    
    assert.equal(12, noTimeForATaxicab('R5, L5, R5, R3'));
  });
});