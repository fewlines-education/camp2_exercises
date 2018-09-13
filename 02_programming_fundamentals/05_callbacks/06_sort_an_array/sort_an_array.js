// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

function sort(unsortedArray) {
  let i = 0;
  while(!isSorted(unsortedArray)){
    let j = i % unsortedArray.length;
    console.log(j);
    if(unsortedArray[j-1] > unsortedArray[j]){
      let temp = unsortedArray[j-1];
      unsortedArray[j-1] = unsortedArray[j];
      unsortedArray[j] = temp;
    }
    i++;
  }
  return unsortedArray;
}

function isSorted(arr) {
  let len = arr.length - 1;
  for(let i = 0; i < len; ++i) {
    if(arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
