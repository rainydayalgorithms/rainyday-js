// You are given an array. One of the elements in this array appears at least 50% of the time.
// Return which number is the majority element.

/**
 * @param {number[]} nums
 * @return {number}
 */

function majorityElement(nums) {
    let majority = nums.length / 2;
    // The index can be the number key, the value is the count
    let countDetails = {};

  // For OF will check the count details of every number. When we find it, return i
    for (let i of nums) {
      // If not in in our set, add it
      if (countDetails[i] == undefined) {
        countDetails[i] = 1; // Have to set a value because it didn't exist before
      } else if (countDetails[i] >= majority) {
        return i;
      } else {
        countDetails[i]++;
      }
    }
    return 0;
};

module.exports = { majorityElement };
