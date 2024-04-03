// Write a function to find the sum of all numbers in an array.

function arraySum(arr) {
  let initialValue = 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
}

console.log(arraySum([2, 5, 4, 7, 98, 21]));
