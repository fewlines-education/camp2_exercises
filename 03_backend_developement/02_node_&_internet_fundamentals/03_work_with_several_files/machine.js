const container = require("./container.js");

function fillWithLitersOfCoffee(numberOfLiters){
  container.putLitersOfCoffee(numberOfLiters);
}

function expresso(){
  return container.consumeLitersOfCoffee(0.08);
}

function longCoffee(){
  return container.consumeLitersOfCoffee(0.15);
}

module.exports = {
  fillWithLitersOfCoffee: fillWithLitersOfCoffee,
  expresso: expresso,
  longCoffee: longCoffee
};
