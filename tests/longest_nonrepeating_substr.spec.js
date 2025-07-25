const assert = require('assert');
const { lengthOfLongestSubstring } =  require('../solutions/longest_nonrepeating_substr');


describe('Length of longest non-repeating substring', () => {
  it('should return 3 for abcabcab', () => {
    let input_string = 'abcabcab';
    let expected = 3;
    let result = lengthOfLongestSubstring(input_string);
    assert.equal(result, expected);
  });

  it('should return 3 for hello', () => {
    let input_string = 'hello';
    let expected = 3;
    let result = lengthOfLongestSubstring(input_string);
    assert.equal(result, expected);
  });

  it('should return 1 for uuuuuuuuuuuuu', () => {
    let input_string = 'uuuuuuuuuuuuu';
    let expected = 1;
    let result = lengthOfLongestSubstring(input_string);
    assert.equal(result, expected);
  });


  it('should return 8 for abcdefgh', () => {
    let input_string = 'abcdefgh';
    let expected = 8;
    let result = lengthOfLongestSubstring(input_string);
    assert.equal(result, expected);
  });
});
