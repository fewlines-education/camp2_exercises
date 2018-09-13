// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cutPaste(sourceFilename, targetFilename){


  fs.readFile(sourceFilename, (error, data) => {
    if (error) {
      console.warn(error);
      return;
    }
    fs.writeFile(targetFilename, data, error => {
      if (error) {
        console.warn(error);
        return;
      }

      console.log("file was indeed copied");

    });
    fs.unlink(sourceFilename, error => {
      if (error) {
        console.warn(error);
        return;
      }

      console.log("File deleted!");
    });

    console.log("The file was saved!");
    rl.close();
  });
}

rl.question("Which file do you want to cut?\n", (source) => {
  rl.question("Where do you want to paste it?\n", (target) => {
    cutPaste(source, target);
  });
});

module.exports = cutPaste;
