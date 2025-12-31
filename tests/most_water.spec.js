const assert = require('assert');
const { mostWater } = require('../solutions/most_water');

describe('Most Water', () => {
  it('should return 4', () => {
    let heights = [1, 2, 3, 7];
    let result = mostWater(heights);
    assert.equal(result, 4);
  });

  it('should return 10', () => {
    let heights = [1, 5, 3, 7];
    let result = mostWater(heights);
    assert.equal(result, 10);
  });

    it('should return 30', () => {
    let heights = [1, 6, 2, 4, 8, 3, 9];
    let result = mostWater(heights);
    assert.equal(result, 30);
  });
});
