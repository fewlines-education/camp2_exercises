const readline = require("readline");
const clear = require("clear");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const morpion = {
  A1: NaN,
  A2: NaN,
  A3: NaN,
  B1: NaN,
  B2: NaN,
  B3: NaN,
  C1: NaN,
  C2: NaN,
  C3: NaN,
  playerTurn: 0,
  pawn0 : " 🖋 ",
  pawn1 : " ⚔ ",
  flag: false,
  equality: false,
  wrongValue: false,
}

function startGame(){
  clear();
  console.log("\nHello players ! Try your best !!! \n\nPress End if you want to exit\n");
  displayGrid();
  askMove();
}

function convertToUnderscore(value){
  if (!(value === morpion.pawn0 || value === morpion.pawn1)){
    return "   ";
  }
  else if(value === morpion.pawn0){return morpion.pawn0;}
  else{return morpion.pawn1;}
}

function displayGrid(){

  console.log("\n         1    2     3 \n");
  console.log(`A      ${convertToUnderscore(morpion.A1)} |${convertToUnderscore(morpion.A2)} |${convertToUnderscore(morpion.A3)} `);
  console.log(`      -----+-----+-----`);
  console.log(`B      ${convertToUnderscore(morpion.B1)} |${convertToUnderscore(morpion.B2)} |${convertToUnderscore(morpion.B3)} `);
  console.log(`      -----+-----+-----`);
  console.log(`C      ${convertToUnderscore(morpion.C1)} |${convertToUnderscore(morpion.C2)} |${convertToUnderscore(morpion.C3)} `);
  console.log("\n");
}

function changePlayer(){
  if(morpion.playerTurn === 0){
    morpion.playerTurn = 1;
  }
  else {morpion.playerTurn = 0;}
}

function askMove(){
  if(morpion.flag){
    changePlayer();
    console.log("\x1b[5m",`End of the game\n Player${morpion.playerTurn+1} wins`);
    rl.close();
  }
  else{
    rl.question(`It's your turn player ${morpion.playerTurn+1} ${morpion["pawn"+morpion.playerTurn]}, choose a cell to play > `, (cellPosition) => {
      clear();

      morpion.wrongValue = true;
      for (let i = 1; i <= 3; i++) {
        if (`A${i}` === cellPosition){
          morpion.wrongValue = false;
        }
        if (`B${i}` === cellPosition){
          morpion.wrongValue = false;
        }
        if (`C${i}` === cellPosition){
          morpion.wrongValue = false;
        }
        // console.log(morpion.wrongValue);
      }
      if(cellPosition === "end" || cellPosition === "End"){
        console.log("\x1b[5m", "You choosed to rage quit\nHere's where you left the game :\n");
        console.log("\x1b[0m");
        rl.close();
      }
      else if(morpion.wrongValue){
        console.log("Wrong Value !\nValue entered must be a position of type : A1\n");
        askMove();
      }
      else if((morpion[cellPosition] === morpion.pawn0 || morpion[cellPosition] === morpion.pawn1)){
        console.log("\x1b[31m",`\nThe cell ${cellPosition} has already been chosen ! \nTry again!`);
        console.log("\x1b[0m");
      }
      else {
        if(morpion.playerTurn === 0){
          morpion[cellPosition] = morpion.pawn0;
          changePlayer();
        } else {
          morpion[cellPosition] = morpion.pawn1;
          changePlayer();
        }
      }
      checkVictoryOrEgality();
      if(morpion.equality){
        console.log("\x1b[5m","\nNo more moves possible\n Equality !!!");
        console.log("\x1b[0m");
        rl.close();
      }
      // clear();
      displayGrid();
      if(!(cellPosition === "end") && !(morpion.equality)){askMove();}
    });
  }
}

function checkVictoryOrEgality(){
  //Check toutes les lignes
  //check si c'est rempli
  for (let i = 1; i <= 3; i++) {
    morpion.equality = true;
    if (!(morpion["A"+i] === morpion.pawn0 || morpion["A"+i] === morpion.pawn1)){
      morpion.equality = false;
    }
    if (!(morpion["B"+i] === morpion.pawn0 || morpion["B"+i] === morpion.pawn1)){
      morpion.equality = false;
    }
    if (!(morpion["C"+i] === morpion.pawn0 || morpion["C"+i] === morpion.pawn1)){
      morpion.equality = false;
    }
  }

  if(((morpion.A1 === morpion.A2) && (morpion.A2 === morpion.A3)) || ((morpion.B1 === morpion.B2) && (morpion.B2 === morpion.B3)) || ((morpion.C1 === morpion.C2) && (morpion.A2 === morpion.C3))){
    // console.log("first equalit : " + ((morpion.A1 === morpion.A2 === morpion.A3) || (morpion.B1 === morpion.B2 === morpion.B3) || (morpion.C1 === morpion.C2 === morpion.C3)));
    morpion.flag = true;
  }
  else if(((morpion.A1 === morpion.B1) && (morpion.B1 === morpion.C1)) || ((morpion.A2 === morpion.B2) && (morpion.B2 === morpion.C2)) || ((morpion.A3 === morpion.B3) && (morpion.B3 === morpion.C3))){
    // console.log("seconde eq : " + ((morpion.A1 === morpion.B1) && (morpion.B1 === morpion.C1)) || ((morpion.A2 === morpion.B2) && (morpion.B2 === morpion.C2)) || ((morpion.A3 === morpion.B3) && (morpion.B3 === morpion.C3)));
    morpion.flag = true;
  }
  else if(((morpion.A1 === morpion.B2) && (morpion.B2 === morpion.C3)) || ((morpion.A3 === morpion.B2) && (morpion.B2 === morpion.C1))){
    // console.log("third eq : " + ((morpion.A1 === morpion.B2) && (morpion.B2 === morpion.C3)) || ((morpion.A3 === morpion.B2) && (morpion.B2 === morpion.C1)));
    morpion.flag = true;
  }
  return morpion.flag;
}

startGame();
