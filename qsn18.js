// Write a function to sort an array in ascending order.

function Ascending(arr) {
  return arr.slice().sort((a, b) => a - b);
}

console.log(Ascending([2, 4, 7, 3, 7, 8, 4, 7, 9, 10]));
