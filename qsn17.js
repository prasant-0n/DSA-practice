// Write a function to remove duplicates from an array.

function Duplicate(arr) {
  const uniqueArr = new Set(arr);
  return Array.from(uniqueArr);
}
console.log(Duplicate([2, 4, 7, 3, 7, 8, 4, 7, 9, 10]));
