function fectorial(num) {
  if (num == 0) return 1;
  return num * fectorial(num - 1);
}

console.log(fectorial(5));
