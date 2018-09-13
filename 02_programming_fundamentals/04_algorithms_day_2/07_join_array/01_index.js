// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"

function joinArray(array, str){
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if(i === array.length-1){result = result + array[i];}
    else {result = result + array[i] + str;}
  }
  return result;
}

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
