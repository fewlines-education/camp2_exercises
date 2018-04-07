// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

for (let i = 1 ; i<= 7 ; i = i + 2) {
  let k = (7 - i)/2;
  let print = "";
  for (let j = k ; j>0 ; j--){
    print = print + " ";
  }
  for (let j = i ; j>0 ; j--){
    print = print + "*";
  }
  
  console.log(print);
}
