/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

/*
function fizzBuzz(list){
  for (let i = 0; i < list.length; i++) {
    if ((list[i] % 3 === 0) && (list[i] % 5 === 0)) {
    //if (list[i] % 15 === 0) {
      list.splice(i,1,"FizzBuzz");
    }else if (list[i] % 3 === 0) {
      list.splice(i,1,"Fizz");
    }else if(list[i] % 5 === 0) {
      list.splice(i,1,"Buzz");
    }else {
      return list;
    }
  }
  return list;
}
*/
function fizzify(number) {
  let result;
  if (number % 15 === 0) {
    result = "FizzBuzz";
  } else if (number % 3 === 0) {
    result = "Fizz";
  } else if (number % 5 === 0) {
    result = "Buzz";
  } else {
    result = number;
  }

  return result;
}

function fizzBuzz (list) {
  return list.map(fizzify);
}

module.exports = fizzBuzz;
