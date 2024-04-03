// Write a function to check if two arrays are equal.

function CheckArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((element, index) => element === arr2[index]);
}

console.log(CheckArray([5, 3, 8, 9, 2], [9, 2, 3, 5, 8]));
