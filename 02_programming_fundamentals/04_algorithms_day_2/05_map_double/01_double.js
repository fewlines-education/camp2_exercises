// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...
function double(list){
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i]*2);
  }
  return result;
}
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
