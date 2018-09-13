// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse(".... . -.--   .--- ..- -.. .") === "HEY JUDE";

// Here is the array of each letter in morse code
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

function decodeMorse(morse) {
  let morseArray = split(morse);
  return arrayMatch(morseArray, MORSE_CODE);
}

function split(morseString){
  console.log("this is morseString : " + morseString.split(" "));
  if(morseString.includes("   ")){
    let index = morseString.indexOf("   ");

  }
  return morseString.split(" ");
}

function arrayMatch(array, array2){
  let result = "";
  for (let i = 0; i < array.length; i++){
    console.log(array2[array[i]]);
    if(array2[array[i]] === undefined){
      result = result + " ";
      i = i + 2;
    }
    result = result + array2[array[i]];
  }
  console.log("this is result :" + result);
  return result;
}

decodeMorse(".... . -.--   .--- ..- -.. .");
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = decodeMorse;

/*Pseudo Code
split(" ") pour separer le 'morse'
utiliser map pour creer un nouveau tableau ou tout match est remplacé

possibilite d'avoir fait un split depuis le string avec comme
parametre tout les elements de MORSE_CODE, ca aurait permis de garder les esapces !
*/
