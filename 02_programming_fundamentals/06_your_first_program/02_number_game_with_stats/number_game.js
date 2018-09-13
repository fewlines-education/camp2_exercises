//Create object and stream
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function testValue(value1, value2){
  if(value1 === "end"){return "error";}
  else if(value1 === "start"){return "Hi, pls enter a number : ";}
  else if(isNaN(value1)){
    return "This was not a number";
  }
  else if(value1 <= 0 || value1 > 100){
    return "The number is between 1 and 100";
  }
  else if(value1 < value2){
    return "Too low";
  }
  else if(value1 > value2){
    return "Too high";
  }
  else{
    return "You won!";
  }
}

const randNb = Math.floor(Math.random()*100);
let iteration = 0;

let repetition = (answer, randNb) => {
  rl.question(`${testValue(answer, randNb)}\n`, function question1(answer){
    iteration++;
    // console.log(`the entered number is ${answer}`);
    // console.log(`the random number is ${randNb}`);
    if(testValue(answer, randNb) === "error"){rl.close();}
    if(testValue(answer, randNb) === "You won!" && iteration === 1){
      console.log("You lucky bastard !");
      rl.close();
    }
    else if (testValue(answer, randNb) === "You won!"){
      console.log(`You won in ${iteration} steps!`);
      rl.close();
    }
    else {repetition(answer, randNb);}
  });
};

repetition("start", randNb, iteration);
