// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  let result = array.filter(fn);
  return result;
}

// do not remove this line, it is for tests
module.exports = filter;
