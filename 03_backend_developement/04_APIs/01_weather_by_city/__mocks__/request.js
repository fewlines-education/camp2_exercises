const fs = require("fs");
const { URL } = require("url");

const request = (request, callback) =>{
  let url;
  if (typeof request === "string") {
    url = new URL(request);
  } else {
    url = new URL(request.url);
  }
  const city = url.searchParams.get("q");

  fs.readFile(`./__mocks__/${city}.json`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    callback(null, null, data);
  });
};
module.exports = request;
