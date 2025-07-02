const assert = require('assert');
const { isPalindromeString } =  require('../solutions/palindrome_string');

/* Test Scenarios:
  > Base positive case: Valid palindrome
  > Base negative case: Invalid palindrome
  > Special characters: Ensure special characters and whitespace is properly handled
  > capital/lowercase: Ensure case does not matter
  > empty string should return true
*/

describe('Palindrome String', () => {
  it('should return true for tacocat', () => {
      let string = "tacocat";
      let result = isPalindromeString(string);
      assert.equal(result, true);
  });

  it('should return true for A man, a plan, a canal: Panama', () => {
      let string = "A man, a plan, a canal: Panama";
      let result = isPalindromeString(string);
      assert.equal(result, true);
  });

  it('should return false for yogurt', () => {
    let string = "yogurt";
    let result = isPalindromeString(string);
    assert.equal(result, false);
  });

  it('should return true for an empty string', () => {
    let string = "";
    let result = isPalindromeString(string);
    assert.equal(result, true);
  });
});
