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

  startGame: function(){
    clear();
    console.log("\nHello players ! Try your best !!! \n\nPress End if you want to exit\n");
    this.displayGrid();
    this.askMove();
  },

  convertToUnderscore: function(value){
    if (!(value === this.pawn0 || value === this.pawn1)){
      return "   ";
    }
    else if(value === this.pawn0){return this.pawn0;}
    else{return this.pawn1;}
  },

  displayGrid: function(){

    console.log("\n         1    2     3 \n");
    console.log(`A      ${this.convertToUnderscore(this.A1)} |${this.convertToUnderscore(this.A2)} |${this.convertToUnderscore(this.A3)} `);
    console.log(`      -----+-----+-----`);
    console.log(`B      ${this.convertToUnderscore(this.B1)} |${this.convertToUnderscore(this.B2)} |${this.convertToUnderscore(this.B3)} `);
    console.log(`      -----+-----+-----`);
    console.log(`C      ${this.convertToUnderscore(this.C1)} |${this.convertToUnderscore(this.C2)} |${this.convertToUnderscore(this.C3)} `);
    console.log("\n");
  },

  changePlayer: function(){
    if(this.playerTurn === 0){
      this.playerTurn = 1;
    }
    else {this.playerTurn = 0;}
  },

  askMove: function(){
    if(this.flag){
      this.changePlayer();
      console.log("\x1b[5m",`End of the game\n Player${this.playerTurn+1} wins`);
      rl.close();
    }
    else{
      rl.question(`It's your turn player ${this.playerTurn+1} ${this["pawn"+this.playerTurn]}, choose a cell to play > `, (cellPosition) => {
        clear();

        this.wrongValue = true;
        for (let i = 1; i <= 3; i++) {
          if (`A${i}` === cellPosition){
            this.wrongValue = false;
          }
          if (`B${i}` === cellPosition){
            this.wrongValue = false;
          }
          if (`C${i}` === cellPosition){
            this.wrongValue = false;
          }
          // console.log(this.wrongValue);
        }
        if(cellPosition === "end" || cellPosition === "End"){
          console.log("\x1b[5m", "You choosed to rage quit\nHere's where you left the game :\n");
          console.log("\x1b[0m");
          rl.close();
        }
        else if(this.wrongValue){
          console.log("Wrong Value !\nValue entered must be a position of type : A1\n");
          this.askMove();
        }
        else if((this[cellPosition] === this.pawn0 || this[cellPosition] === this.pawn1)){
          console.log("\x1b[31m",`\nThe cell ${cellPosition} has already been chosen ! \nTry again!`);
          console.log("\x1b[0m");
        }
        else {
          if(this.playerTurn === 0){
            this[cellPosition] = this.pawn0;
            this.changePlayer();
          } else {
            this[cellPosition] = this.pawn1;
            this.changePlayer();
          }
        }
        this.checkVictoryOrEgality();
        if(this.equality){
          console.log("\x1b[5m","\nNo more moves possible\n Equality !!!");
          console.log("\x1b[0m");
          rl.close();
        }
        // clear();
        this.displayGrid();
        if(!(cellPosition === "end") && !(this.equality)){this.askMove();}
      });
    }
  },

  checkVictoryOrEgality: function(){
    //Check toutes les lignes
    //check si c'est rempli
    for (let i = 1; i <= 3; i++) {
      this.equality = true;
      if (!(this["A"+i] === this.pawn0 || this["A"+i] === this.pawn1)){
        this.equality = false;
      }
      if (!(this["B"+i] === this.pawn0 || this["B"+i] === this.pawn1)){
        this.equality = false;
      }
      if (!(this["C"+i] === this.pawn0 || this["C"+i] === this.pawn1)){
        this.equality = false;
      }
    }

    if(((this.A1 === this.A2) && (this.A2 === this.A3)) || ((this.B1 === this.B2) && (this.B2 === this.B3)) || ((this.C1 === this.C2) && (this.A2 === this.C3))){
      // console.log("first equalit : " + ((this.A1 === this.A2 === this.A3) || (this.B1 === this.B2 === this.B3) || (this.C1 === this.C2 === this.C3)));
      this.flag = true;
    }
    else if(((this.A1 === this.B1) && (this.B1 === this.C1)) || ((this.A2 === this.B2) && (this.B2 === this.C2)) || ((this.A3 === this.B3) && (this.B3 === this.C3))){
      // console.log("seconde eq : " + ((this.A1 === this.B1) && (this.B1 === this.C1)) || ((this.A2 === this.B2) && (this.B2 === this.C2)) || ((this.A3 === this.B3) && (this.B3 === this.C3)));
      this.flag = true;
    }
    else if(((this.A1 === this.B2) && (this.B2 === this.C3)) || ((this.A3 === this.B2) && (this.B2 === this.C1))){
      // console.log("third eq : " + ((this.A1 === this.B2) && (this.B2 === this.C3)) || ((this.A3 === this.B2) && (this.B2 === this.C1)));
      this.flag = true;
    }
    return this.flag;
  },
};

morpion.startGame();
