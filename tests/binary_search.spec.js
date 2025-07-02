const assert = require('assert');
const { binary_search } =  require('../solutions/binary_search');

/* Test Scenarios:
  > Base case: Search for any value in the array
  > Search for a value that isn't present
  > Search for a value at the beginning and end of the array
*/

describe('Binary Search', () => {
  it('should return index 2 when target number is in index 2', () => {
    let testArray = [1, 2, 3, 5, 6, 7, 11, 14, 19, 20];
    let target = 3;
    let result = binary_search(testArray, target)
    assert.equal(result, 2);
  });

  it('should return -1 when the value is not present', () => {
    let testArray = [1, 2, 3, 5];
    let target = 4;
    let result = binary_search(testArray, target)
    assert.equal(result, -1);
  });

  it('should return 0 when target is the first index', () => {
    let testArray = [1, 2, 3, 5, 6, 11, 14, 19, 20];
    let target = 1;
    let result = binary_search(testArray, target)
    assert.equal(result, 0);
  });

  it('should return 8 when target is the final index for 9 numbers', () => {
    let testArray = [1, 2, 3, 5, 6, 11, 14, 19, 20];
    let target = 20;
    let result = binary_search(testArray, target)
    assert.equal(result, 8);
  });
});
