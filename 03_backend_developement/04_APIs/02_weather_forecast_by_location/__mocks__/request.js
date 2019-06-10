const fs = require("fs");

const request = (request, callback) =>
  fs.readFile("./__mocks__/59000.json", "utf8", (err, data) => {
    if (err) console.error(err);
    callback(null, null, data);
  });

module.exports = request;
