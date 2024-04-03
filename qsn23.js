// Write a function to remove an element from an array.

function removeElement(arr, element) {
  return arr.filter((value) => value !== element);
}
console.log(removeElement([2, 4, 26, 3, 6, 2, 6], 6));
