// Write a function to count the number of words in a string.

function countWord(str) {
  str = str.trim();
  console.log(str);
  if (str === "") {
    return 0;
  }
  const words = str.split(/\s+/);
  return words.length;
}

console.log(countWord("hello sir, i am Prasanta"));
