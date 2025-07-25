const assert = require('assert');
const { addBinary } =  require('../solutions/binary_addition');


describe('Binary Addition', () => {
  it('should return 100 when adding 11 and 1', () => {
    let first = '11';
    let second = '1';
    let expected = '100';
    let result = addBinary(first, second);
    assert.equal(result, expected);
  });

  it('should return 1001 when adding 101 and 100', () => {
    let first = '11';
    let second = '1';
    let expected = '100';
    let result = addBinary(first, second);
    assert.equal(result, expected);
  });

  it('should return 1000101 when adding 101111 and 10110', () => {
    let first = '10110';
    let second = '101111';
    let expected = '1000101';
    let result = addBinary(first, second);
    assert.equal(result, expected);
  });

  it('should return 1010 when adding 101 and 101', () => {
    let first = '101';
    let second = '101';
    let expected = '1010';
    let result = addBinary(first, second);
    assert.equal(result, expected);
  });  
});
