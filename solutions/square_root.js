// SQUARE ROOT
// You are given an integer. Return its square root rounded down to the nearest integer

var mySqrt = function(x) {
    if (x < 2) return x;
    let pivotSquared = 0;
    let pivot = 2;
    let low = 2;
    let high = Math.floor(x / 2);

    while (low <= high) {
        // The pivot is a midpoint based off of the centerpoint of the two pointer numbers
        pivot = low + Math.floor((high - low) / 2);
        pivotSquared = pivot * pivot;
        if (x < pivotSquared) {
            high = pivot - 1;
        } else if (x > pivotSquared) {
            low = pivot + 1;
        } else return pivot;
    }
    return high;
};

module.exports = { mySqrt }
