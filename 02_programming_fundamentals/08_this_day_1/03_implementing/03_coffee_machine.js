// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment
const machine = {
  //Status
  litersOfCoffee : 0,

  //Method
  fillWithLitersOfCoffee: function(liters){
    this.litersOfCoffee += liters;
  },

  expresso: function(){
    if(this.litersOfCoffee >= 0.08){
      this.litersOfCoffee -= 0.08;
      return true;
    }
    else{return false;}
  },

  longCoffee: function(){
    if(this.litersOfCoffee >= 0.15){
      this.litersOfCoffee -= 0.15;
      return true;
    }
    else{return false;}
  },
};

//
// machine.fillWithLitersOfCoffee(10);
// console.log(machine.expresso()); // => true
// console.log(machine.litersOfCoffee); // => 9.92
// console.log(machine.longCoffee()); // => true
// console.log(machine.litersOfCoffee); // => 9.77
// // some more people ordering coffee here
// console.log(machine.litersOfCoffee); // => 0.02
// console.log(machine.expresso()); // => false

module.exports = machine;
