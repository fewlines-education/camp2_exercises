// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
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
//   if (pickEvenNumbers(3) === "even") {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i]%2 === 0) {
//         fList.push(array[i]);
//       }
//     }
//   }else if(pickEvenNumbers(3) === "odd"){
//     for (let i = 0; i < array.length; i++) {
//       if (array[i]%2 !== 0) {
//         fList.push(array[i]);
//       }
//     }
//   }
//   return fList;
// }

function filter(array, fn){
  return array.filter(fn);
}


// do not remove this line, it is for tests
module.exports = filter;
