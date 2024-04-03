// Write a function to check if a number is prime.

function primeCheck(num) {
  if (num <= 1) return false;
  let start = 2;
  if (start > num) {
    if (start % 2 === 0) {
      return false;
    }
    primeCheck(start++);
  }
}

console.log(primeCheck(4));
