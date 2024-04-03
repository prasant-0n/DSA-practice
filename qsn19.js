// Write a function to sort an array in descending order.

function descending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

console.log(descending([2, 4, 7, 3, 7, 8, 4, 7, 9, 10]));
