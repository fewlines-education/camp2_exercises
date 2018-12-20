const phone = {
  functional: true,
  turnedOn: true,
  speaker: true,
  microphone: true,
  simSlot: 1,
  validSim: false,
  myNumber: null,
  system: "",
  
  calling: function(number){
    if(this.turnedOn && this.validSim){
      console.log(`Now calling : ${number} ... `);
    }
    else if(this.turnedOn){
      console.log(`Sim card is invalid`);
    } else {
      console.log(`Phone is turned off`);
    }
  },

  powerButton: function(){
    if(this.turnedOn){this.turnedOn = false;}
    else {this.turnedOn = true;}
  },
}

let massung = Object.assign({}, phone);

let jPhone = Object.assign({}, phone);

let personalJPhone = Object.assign({}, jPhone);

let workJPhone = Object.assign({}, jPhone);


module.exports = {phone, massung, jPhone, personalJPhone, workJPhone};
