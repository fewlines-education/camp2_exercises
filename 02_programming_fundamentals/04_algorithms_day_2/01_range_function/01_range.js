// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(number1, number2) {
	let list = [];
    if(number1 < number2){
    	for (let i = number1; i <= number2; i++) {list.push(i);
    	}
    }else {
    	for (let i = number1; i >= number2; i--) {
    		list.push(i);
    	}
    }
    return list;
}

// Do not remove last lines, it is for u9p

// eslint-disable-next-line
module.exports = range;
