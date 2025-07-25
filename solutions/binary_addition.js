// BINARY ADDITION

// You are given two strings that represent binary numbers.
// Return what the value of them after being added together.

var addBinary = function(a, b) {
   let n = a.length;
   let m = b.length;

   if (n < m) return addBinary(b , a);

   let result = [];
   let carry = 0;
   let j = m - 1;

   for (let i = n - 1; i >= 0; --i) {
    if (a[i] === '1') ++carry;
    if (j >= 0 && b[j--] === '1') ++carry;

    result.push((carry % 2).toString());
    carry = Math.floor(carry / 2);
   } 
   if (carry === 1) result.push('1');
   return result.reverse().join('');
};

module.exports = { addBinary }