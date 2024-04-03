function palindrome(str1, str2) {
  if (str1.length !== str2.length) return false;

  // Create an object to store the frequency of characters in str1
  const charCount = {};

  // Count the frequency of characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement the count for characters in str2
  for (let char of str2) {
    // If the character doesn't exist in charCount or its count becomes zero, return false
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // If all characters in str2 are accounted for, return true
  return true;
}

console.log(palindrome("hello", "ollhe")); // Output: true
