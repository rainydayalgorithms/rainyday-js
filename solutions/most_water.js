/* WITH MAXIMUM WATER STORED
You are given an integer array that represents height of walls along a y axis, 
and their index in the array represents their position along the x axis.
Calculate the maximum amount of water that could be held based on height and
width between the two walls

Return the maximum amount of water that could be stored */

var mostWater = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1

    while (left < right) {
        let width = right - left;

        max = Math.max(max, Math.min(height[left], height[right]) * width);
        if (height[left] <= height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return max;
};

module.exports = { mostWater };