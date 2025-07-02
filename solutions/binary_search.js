function binary_search(nums, target) {
  let first = 0;
  let last = nums.length - 1;
  let mid = 0;

  while (first <= last) {
    mid = Math.floor((first + last)/2);
    if (nums[mid] == target)
      return mid;
    else if (nums[mid] < target)
      first = mid + 1;
    else
      last = mid - 1;
  }

  return -1;
}

module.exports = { binary_search };
