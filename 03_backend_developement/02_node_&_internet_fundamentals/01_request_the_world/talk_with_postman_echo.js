const request = require("request");

function simpleGet(callback) {
  request({
    url: "https://postman-echo.com/get",
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

function simpleGetWithParams(callback) {
  request.get("https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis")
    .on("data", function(result){
      callback(JSON.parse(result).args);
    });
}

function formatDate(date) {
  let d = new Date(date);
  let month = "" + d.getMonth() + 1;
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, day, month].join("-");
}

function validateTimestamp(callback) {
  const currentDate = formatDate(new Date());
  request({
    url: `https://postman-echo.com/time/valid?timeStamp=${currentDate}`,
    method: "GET"
  }, (error, response, result) => {
    callback(result);
  });
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
