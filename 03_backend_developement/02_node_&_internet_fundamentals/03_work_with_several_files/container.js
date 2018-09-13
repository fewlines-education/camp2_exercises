let litersOfCoffee = 0;

function putLitersOfCoffee(numberOfLiters){
  litersOfCoffee += numberOfLiters;
  return litersOfCoffee;
}

function consumeLitersOfCoffee(numberOfLiters){
  if(litersOfCoffee<numberOfLiters){return false;}
  else {
    litersOfCoffee -= numberOfLiters;
    return true;
  }
}


module.exports = {
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
