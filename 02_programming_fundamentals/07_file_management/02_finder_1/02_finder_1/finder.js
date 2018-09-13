/*
In many ways, Finder is a sadly unergonomic software.
I suggest you realize the feat of doing even worse by
implementing your own Finder.

Let's go for the worst user experience of history!
*/
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function finderRec(file) {
  console.log("the original link is : " + file);
  let list = showAllSubfiles(file);
  let numberChoosed = askQuestion(list, file);
}

function showAllSubfiles(directory){
  let i = 0;
  let files = [];
  if(fs.readdirSync(directory).length === 0){return "This repisotory is empty";}
  else{
    fs.readdirSync(directory).forEach(file => {
      console.log(`${i}. ${file}`);
      files.push(file);
      i++;
    });
  }
  console.log("\n");
  return files;
}


function openFile(file){
  fs.readFile(file, "utf8", (err, data) => {
    if(err){console.warn(err);}
    else{
      console.log("\nThe data in this file is : \n \n");
      console.log(data);
    }
  });
  rl.close();
}

function askQuestion(file , list){
  rl.question("Choose a number to navigate >  ", (number) => {

    if(Number.isInteger(number)){
      console.warn("Value entered is not a number");
      askQuestion(file, list);
    }

    if(fs.lstatSync(file[number]).isDirectory()){
      console.log(`resultat de la fonction showAll : ${showAllSubfiles(file[number])}`);
      finderRec(path.resolve(file[number]));
    }
    else{openFile(file[number]);}

  });

}

function finder(){
  finderRec(__dirname);
}

finder();
module.exports = finder;
