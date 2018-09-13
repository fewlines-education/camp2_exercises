// This function will clear the terminal when called
const clear = require("cli-clear");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
let flagBoard = ["X", "X", "X", "X", "X", "X"];
let temp = ["X", "X", "X", "X", "X", "X"];

function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

shuffle(cards);

function canPlayThisCard(number1, number2){
  if(!(flagBoard[number1]==="X") || !(flagBoard[number2]==="X")){
    return "You have already found one of the cards";
  }
  else {return "OK";}
}

let cardRequest = () => {
  rl.question("Choose the first card you want to return : ", answer => {
    rl.question("Choose the second car you want to return : ", answer2 => {
      clear();
      let temp = flagBoard.slice(0);
      temp[answer] = cards[answer];
      temp[answer2] = cards[answer2];

      if(!(canPlayThisCard(answer,answer2) === "OK")){
        console.log(canPlayThisCard(answer, answer2));
        cardRequest();
      }
      else if(cards[answer] === cards[answer2]){
        flagBoard[answer] = cards[answer];
        flagBoard[answer2] = cards[answer2];
        console.log(`Good Job you found 2 ${flagBoard[answer]} !\n`);
        console.log(flagBoard);
        cardRequest();
      }
      else{
        console.log("too bad the cards didn't match...");
        console.log("this is the card you lifted : \n \n" + temp + "\n");
        console.log("Now i'll put the game back : \n \n" + flagBoard + "\n");
        cardRequest();
      }

      if(!flagBoard.includes("X")){
        console.log("You won the game");
        console.log(flagBoard);
        rl.close();
      }

    });
  });
};

cardRequest();
