// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
// const n = 1;
// function pickEvenNumbers(n){
//   if (n % 2 === 0) {
//     return "odd";
//   }else if (n % 2 !== 0){
//     return "even";
//   }
// }
//
// function filter(array, pickEvenNumbers) {
//   // Your code here
//   const fList = [];
//   if (pickEvenNumbers(3) === pickEvenNumbers) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i]%2 === 0) {
//         fList.push(array[i]);
//       }
//     }
//   }else if(pickEvenNumbers(3) === pickEvenNumbers){
//     for (let i = 0; i < array.length; i++) {
//       if (array[i]%2 !== 0) {
//         fList.push(array[i]);
//       }
//     }
//   }
//   return fList;
// }

function filter(array, fn){
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// do not remove this line, it is for tests
module.exports = filter;
