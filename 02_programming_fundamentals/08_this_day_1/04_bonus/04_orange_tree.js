// See Sparta courses for the exercise summary
const orangeTree = {
  //Status
  height:0,
  age:0,
  oranges:0,
  alive:false,

  //Method
  pickAnOrange: function(){
    if(!this.alive){
      console.log(`This tree is dead at age ${this.age}, plant a new one !`);
      return; }
    if(this.oranges>0){
      this.oranges = this.oranges - 1;
      return true;
    }
    else{
      console.log("There is no more oranges");
      return false;
    }
  },

  ageOneYear: function(){
    if(!this.alive){
      console.log(`This tree is dead at age ${this.age}, plant a new one !`);
      return; }
    if(this.age>0 && this.age>= 50 && this.age<100){
      if(this.age/100 > Math.random()){
        this.alive=false;
      }
    }

    this.oranges = 0;
    if(this.age > 100){
      console.log(`This tree is dead at age ${this.age}, plant a new one !"`);
      this.alive = false;
    }

    if(this.alive){
      this.age = this.age + 1;

      if(this.age<10){this.height = this.height + 25;}
      else if(this.age<20){this.height = this.height + 10;}

      if(this.age<5){this.oranges = 0;}
      else if(this.age>=5 && this.age<10){this.oranges = 10;}
      else if(this.age>=10 && this.age<20){this.oranges = 20;}
      else if(this.age<40){this.oranges = 5;}


      return this;
    }
    else{console.log(`This tree is dead at age ${this.age}, plant a new one !"`);}
  },

  seed: function(){
    this.height = 0;
    this.age= 0;
    this.oranges = 0;
    this.alive = true;
  }
};

module.exports = orangeTree;
//
//
// const car = {
//   //State
//   minutes: 35,
//   distance: 200,
//   vitesse: 100,
//
//   //Fonction
//   start: function() {
//
//   },
//
//   changeSpeed: function(vitesse){
//
//   },
//
//   drive: function(minutes){
//
//   },
//
//   showDistance: function(){
//
//   },
// };
