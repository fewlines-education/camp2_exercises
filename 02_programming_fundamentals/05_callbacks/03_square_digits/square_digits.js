// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  return parseInt(arrayToString(squareArray(stringConvertion(number))), 10);
}

function stringConvertion(nb){
  let stringNb = nb.toString();
  let stringArray = [];
  for (let i = 0; i < stringNb.length; i++) {
    stringArray.push(stringNb.charAt(i));
  }
  return stringArray;
}

function squareArray(array){
  return array.map(squareNumber);
}

function squareNumber(number){
  return number * number;
}

function arrayToString(array){
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;

/* Pseudo Code
convert the number to string
convert the string to a list of char
extracts each number one by one and square them in a string
convert the string to a number
print the number
*/
