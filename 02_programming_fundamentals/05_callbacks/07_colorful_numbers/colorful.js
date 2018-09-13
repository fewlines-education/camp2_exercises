// Create a function `isColorful(number)` that will return `true` if the given number is colorful
// or `false` if the given number is not colorful
//
// Example:
//
// isColorful(3245) # => true
// isColorful(10) # => false
//
// Note: Read Sparta exercises to have more details about what defines a colorful number

// Insert your code here ⇩
function isColorful(number){
  let result = arrayWithSub(toArray(number));
  console.log("result is : "+ result);
  let arrResult = result.map(multConcat);
  console.log("arrResult is : " + arrResult);
  console.log(verityTest(arrResult));
  return verityTest(arrResult);
}

// function Arrayify(number){
//   let str = number.toString();
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     result.push(str.charAt(i));
//   }
// }

function toArray(number){
  let str = number.toString();
  let mt1 = [];
  for (let i = 0; i < str.length; i++) {
    mt1.push(str.charAt(i));
  }
  console.log("arr is : " + mt1);
  return mt1;
}

function arrayWithSub(array){
  let twoDMatrix = [];

  for (let i = 1; i < array.length+1; i++) {
    for (let j = 0; j < array.length; j++ ) {
      if(array.slice(j,i+j).length === (i)){
        twoDMatrix.push(array.slice(j,i+j));
      }
      //console.log("current state of twoD : " + twoDMatrix);
      //console.log("current value of j and i+j : " + j + ", " + (i+j));
    }
  }
  console.log(twoDMatrix);
  return twoDMatrix;
}

function multConcat(arrarr){
  let result = 1;
  for (let i = 0; i < arrarr.length; i++) {
    result = result * arrarr[i];
  }
  return result;
}

function verityTest(arr){
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(i !== j && arr[i] === arr[j]){
        flag =  false;

      }
    }
  }
  console.log(flag);
  if(flag){return true;}
  else {return false;}
}
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = isColorful;


/* Pseudo code
divide the number into an array of numbers
check all conditions in a big true condition
*/
