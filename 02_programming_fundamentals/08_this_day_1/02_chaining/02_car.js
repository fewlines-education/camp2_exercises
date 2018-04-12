// See Sparta courses for the exercise summary
const car = {
  //Status
  speed: 0,
  timeTraveled: 0,
  distancetraveled: 0,

  //Method
  start: function(){
    this.speed = 0;
    this.timeTraveled = 0;
    this.distancetraveled = 0;
    return this;
  },

  changeSpeed: function(speed){
    this.speed = speed;
    return this;
  },

  drive: function(time){
    this.timeTraveled = time;
    this.distancetraveled = this.distancetraveled + (this.timeTraveled * (this.speed / 60));
    return this;
  },

  showDistance : function(){
    console.log(this.distancetraveled + " Km");
    return this.distancetraveled + " Km";
  }
};

console.log(car.start().changeSpeed(130).drive(42).showDistance());
module.exports = car;
