// Write a function to rotate an array to the right by a given number of steps.

function rotate(nums, k) {
  const n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
  if (start >= end) {
    return;
  }
  [nums[start], nums[end]] = [nums[end], nums[start]];
  reverse(nums, start + 1, end - 1);
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
