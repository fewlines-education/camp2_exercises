const {emergency} = require("./emergency.js")

const machine = {
  litersOfCoffee : 0,

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
  }
};

module.exports = machine;
