const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function repeatAfterMe(text) {
  console.log(text);
}

function askTheUser(callback) {
  reader.question("Enter a sentence:", (input) => {
    callback(input);
    reader.close();
  });
}

askTheUser(repeatAfterMe);
