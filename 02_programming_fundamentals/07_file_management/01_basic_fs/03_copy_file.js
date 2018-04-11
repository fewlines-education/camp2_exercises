// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.

const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function copyPaste(){
  let flag = false;
  rl.question("which file do you want to copy?\n", (givenPath) => {
    fs.readFile(givenPath, (error, data) => {
      if (error) {
        console.warn(error);
        return;
      }
      let ext = path.extname(givenPath);
      let newName = path.basename(givenPath, ext)+"_copy"+ext;
      fs.writeFile(newName, data, error => {
        if (error) {
          console.warn(error);
          return flag;
        }
        flag = true;
        console.log("the file has been copied");
        if(flag){return flag;}
      });
    });
    rl.close();
  });

}
console.log(copyPaste());
module.exports = copyPaste;
