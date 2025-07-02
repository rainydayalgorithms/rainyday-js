const assert = require('assert');
const { validParensArray, validParensHash } = require('../solutions/valid_parentheses');

/* Test Scenarios:
  > Valid nested parens
  > Valid non-nested parens
  > Invalid parens
  > Only one bracket

  Other Notes:
  > Include all three bracket types at least once
*/

describe('Parentheses Check: Array Implementation', () => {
  it('should return true for valid nested parentheses', () => {
      let parens = "[({[{}]})]";
      let result = validParensArray(parens);
      assert.equal(result, true);
  });

  it('should return true for valid non-nested parentheses', () => {
    let parens = "[]()[]{}";
    let result = validParensArray(parens);
    assert.equal(result, true);
  });

  it('should return false for invalid parentheses', () => {
    let parens = "[]()[){}";
    let result = validParensArray(parens);
    assert.equal(result, false);
  });

  it('should return false for no closing bracket', () => {
    let parens = "{";
    let result = validParensArray(parens);
    assert.equal(result, false);
  });
});

describe('Parentheses Check: Hash Implementation', () => {
  it('should return true for valid nested parentheses', () => {
      let parens = "[({[{}]})]";
      let result = validParensHash(parens);
      assert.equal(result, true);
  });

  it('should return true for valid non-nested parentheses', () => {
    let parens = "[]()[]{}";
    let result = validParensHash(parens);
    assert.equal(result, true);
  });

  it('should return false for invalid parentheses', () => {
    let parens = "[]()[){}";
    let result = validParensHash(parens);
    assert.equal(result, false);
  });

  it('should return false for no closing bracket', () => {
    let parens = "{";
    let result = validParensHash(parens);
    assert.equal(result, false);
  });
});
