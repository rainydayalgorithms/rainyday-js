/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindromeNum(x) {
    // Handle for negatives and anything that ends in 0
    if (x < 0 || x % 10 == 0 && x != 0) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x /= 10);
    }

    // OR handles for if there is an odd number of digits
    return x == reversed || x == Math.floor(reversed / 10);
};

module.exports = { isPalindromeNum }
