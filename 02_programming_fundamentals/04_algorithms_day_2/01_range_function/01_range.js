// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(val1, val2) {
  let result = [];
  let beg, end;
  if(val1<val2){
    beg = val1;
    end = val2;
    let diff = end - beg;
    for (let i = 0; i <= diff; i++) {
      result.push(beg);
      beg++;
    }
  }
  else{
    beg = val2;
    end = val1;
    let diff = end - beg;
    for (let i = 0; i <= diff; i++) {
      result.push(end);
      end--;
    }
  }
  return result;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
