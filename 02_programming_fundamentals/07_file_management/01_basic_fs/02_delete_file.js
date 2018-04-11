// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const path = require("path");
const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function deleteFile(){
  rl.question("which file do you want to delete?\n", (path) => {
    fs.unlink(path, (err) => {
      // if(!(stats.isDirectory(path))){
      //   console.log("path must not be a directory");
      //   deleleFile();
      // }
      if (err) throw err;

      console.log(`${path} txt was deleted`);
    });
    rl.close();
  });
}

deleteFile();

module.exports = deleteFile
