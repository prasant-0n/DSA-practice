//Write a function to find the largest number in an array.

function findLargestNumber(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

console.log(findLargestNumber([2, 5, 4, 7, 98, 21])); // Output: 98
