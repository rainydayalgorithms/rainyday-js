const assert = require('assert');
const { isPalindromeNum } =  require('../solutions/palindrome_number');

/* Test Scenarios:
  > Base positive case: Valid palindrome
  > Base negative case: Invalid palindrome
  > One digit
  > Negative number
*/

describe('Palindrome Number', () => {
  it('should return true for 1', () => {
    let num = 1;
    let result = isPalindromeNum(num);
    assert.equal(result, true);
  });

  it('should return true for 999', () => {
    let num = 999;
    let result = isPalindromeNum(num);
    assert.equal(result, true);
  });

  it('should return true for 123321', () => {
    let num = 123321;
    let result = isPalindromeNum(num);
    assert.equal(result, true);
  });

  it('should return false for 10', () => {
    let num = 10;
    let result = isPalindromeNum(num);
    assert.equal(result, false);
  });

  it('should return false for 103401', () => {
    let num = 103401;
    let result = isPalindromeNum(num);
    assert.equal(result, false);
  });

  it('should return false for negative numbers', () => {
    let num = -3;
    let result = isPalindromeNum(num);
    assert.equal(result, false);
  });
});
