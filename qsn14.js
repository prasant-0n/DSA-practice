// Write a function to find the average of all numbers in an array.

function average(arr) {
  let initalValue = 0;
  return (
    arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initalValue
    ) / arr.length
  );
}
console.log(average([2, 5, 3, 5, 7, 3, 6, 7]));
