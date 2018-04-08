// Implements the `pow` function
// It takes two arguments and returns the first value
// at the power of the second value
//
// for instance pow(2,8) = 256

function pow(number, power) {
  if(power === 0){return 1;}
  else if(!Number.isInteger(number)){return null;}
  else if(number === 0){return number;}
  else {
    let result = number;

    for(let i = 1; i < power; i++){
      result = mult(result,number);
    }
    return result;
  }
}

function mult(number, number2){
  return number * number2;
}

// do not remove this line, it is for tests
module.exports = pow;
