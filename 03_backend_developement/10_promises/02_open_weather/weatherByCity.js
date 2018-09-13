const fetch = require("node-fetch");

fetch("http://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&appid=bca262add92c9ed101258da9e961b2b3"
  , {method:"GET"})
  .then((result) => (result.json()))
  .then((result) => console.log(result.name, ":",result.main.temp, "°C"));

fetch("http://api.openweathermap.org/data/2.5/weather?lat=32.661343&lon=51.680374&units=metric&appid=6512f520642c646e2e5627ae803600c1")
  .then((result) => (result.json()))
  .then((result) => console.log(result.name, ":",result.main.temp, "°C"));


// function(error, response, result) {
//   const tempResult = JSON.parse(result).main.temp+"°C";
//   console.log(tempResult);
//   // callback(result);
//
//   return tempResult;
// }
