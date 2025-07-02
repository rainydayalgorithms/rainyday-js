/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindromeString(s) {
    // Update string to remove characters we want to ignore
    const mystring = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');

    // Pointers to the front and back of string
    let left = 0;
    let right = mystring.length - 1;

    while (left < right) {
        if (mystring.charAt(left) != mystring.charAt(right)) {
            return false;
        }
        else {
            left++;
            right--;
        }
    }
    // If left is greater or equal to right, then we successfully got to the middle: Palindrome is true
    return left >= right;
};

module.exports = { isPalindromeString }
