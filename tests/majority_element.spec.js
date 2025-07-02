const assert = require('assert');
const { majorityElement } = require('../solutions/majority_element');

describe('Majority Element', () => {
  it('should return 2 if 2 is the majority element', () => {
    let nums = [1, 2, 3, 2, 2, 2, 2, 2, 2, 7];
    let result = majorityElement(nums);
    assert.equal(result, 2);
  });

  it('should return 0 if there is no majority element', () => {
    let nums = [1, 2, 3, 4, 5, 6, 7];
    let result = majorityElement(nums);
    assert.equal(result, 0);
  });
});
