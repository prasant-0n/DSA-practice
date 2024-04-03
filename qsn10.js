function reverse(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(reverse([2, 4, 6, 3, 6, 9, 8]));
