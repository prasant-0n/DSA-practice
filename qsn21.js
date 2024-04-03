// Write a function to merge two sorted arrays into one sorted array.

function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergeArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergeArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergeArr.push(arr2[j]);
    j++;
  }

  return mergeArr;

  //   return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
