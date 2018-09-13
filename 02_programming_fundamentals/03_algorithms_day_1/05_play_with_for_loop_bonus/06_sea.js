// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```

const wave = "~";
const x = "X";
const whirlpools = "0";

for(let j = 0; j<9 ; j++){
  let print = "";
  for(let i = 0; i<30 ; i++){
    if((i === 24 && j === 1) || (i === 6 && j === 8)){
      print = print + x;
    }
    else if((i === 5 && j === 3) || (i === 17 && j === 6)){
      print = print + whirlpools;
    }
    else {print = print + wave;}
  }
  console.log(print);
}
