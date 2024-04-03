// Write a function to find the smallest number in an array.

function SmallestArrayValue(arr) {
  return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
}
console.log(SmallestArrayValue([6, 7, 3, 6, 2, 6, 8, 3, 7, 9, 10]));
