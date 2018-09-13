/*
In many ways, Finder is a sadly unergonomic software.
I suggest you realize the feat of doing even worse by
implementing your own Finder.

Let's go for the worst user experience of history!
*/

const cut = require("./cut_file.js");
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
  askQuestion(list, file);
}

function showAllSubfiles(directory){
  let i = 0;
  let files = [];
  if(fs.readdirSync(directory).length === 0){return "This repisotory is empty";}
  else{
    fs.readdirSync(directory).forEach(file => {
      console.log(`${i+1}. ${file}`);
      files.push(file);
      i++;
    });
  }
  console.log("\n");
  return files;
}


function openFile(file){
  fs.readFile(file, (err, data) => {
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

    if(fs.lstatSync(file[number-1]).isDirectory()){
      optionMenuDir();
      // finderRec(path.resolve(file[number]));
      rl.question("Choose an option >  ", (optionValue)=> {
        if(optionValue === 1 || optionValue === "open"){
          showAllSubfiles(file[number-1]);
        }
        else if(optionValue === 2 || optionValue === "copy"){
          let a;
        }
        else if(optionValue === 3 || optionValue === "move"){
          rl.question("Choose a new folder name", (newFolderName) => {
            cut.cutPaste(file[number-1], newFolderName);
          });
        }
      });
      rl.close();

    }
    else{
      optionMenuFile();
      openFile(file[number-1]);
      rl.close();
    }

  });

}

function optionMenuDir(){
  console.log("Open");
  console.log("Copy");
  console.log("Move");
}

function optionMenuFile(){
  console.log("Open");
  console.log("Copy");
  console.log("Move");
}

function finder(){
  finderRec(__dirname);
}

finder();
module.exports = finder;
