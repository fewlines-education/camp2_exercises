// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function touch(name){
  let accessed = new Date();
  let flag = "r";
  if(!Number.isInteger(fs.open(name,flag, (err, fd) => {
    if(err){return "a";}
    return fd;
  }))){
    fs.writeFile(name, " " , (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
  let modified = new Date();


  fs.utimesSync(name, accessed, modified);
  rl.close();
}

rl.question("enter the file name\n", (name) => {
  touch(name);
});

module.exports = touch;

//stats.atime
//stats.mtime
//stats.ctime
//fs.futimes(fd, atime, mtime, callback)
//fs.utimes(path, atime, mtime, callback)
//atime: Mon, 10 Oct 2011 23:24:11 GMT,
//mtime: Mon, 10 Oct 2011 23:24:11 GMT,
//ctime: Mon, 10 Oct 2011 23:24:11 GMT,
