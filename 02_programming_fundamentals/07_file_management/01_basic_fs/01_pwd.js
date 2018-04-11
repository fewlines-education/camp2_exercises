const path = require("path");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"


function pwd() {
  console.log(`Your current path is ${__dirname}\n`);
  rl.question("which file do you want to get the path?\n", (file) => {
    console.log(path.resolve(file));
    rl.close();
  });
}

pwd();

module.exports = pwd;
