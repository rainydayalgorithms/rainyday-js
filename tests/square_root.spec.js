const assert = require('assert');
const { mySqrt } =  require('../solutions/square_root');


describe('Square Root', () => {
  it('should return 3 if the input number is 9', () => {
    let input_number = 9;
    let result = mySqrt(input_number);
    assert.equal(result, 3);
  });

  it('should return 3 if the input number is 11', () => {
    let input_number = 11;
    let result = mySqrt(input_number);
    assert.equal(result, 3);
  });

  it('should return 9 if the input number is 82', () => {
    let input_number = 82;
    let result = mySqrt(input_number);
    assert.equal(result, 9);
  });

  it('should return 1 if the input number is 2', () => {
    let input_number = 2;
    let result = mySqrt(input_number);
    assert.equal(result, 1);
  });  
});
