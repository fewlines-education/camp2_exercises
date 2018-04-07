// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
let line = "******";
for (let i = 5; i > 0; i--) {
  console.log(line.substr(0,i));
}
