
const request = require("request");

function weatherByCity(cityName) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=6512f520642c646e2e5627ae803600c1`,
      method: "GET"
    },
    function(error, response, result) {
      const tempResult = JSON.parse(result).main.temp+"°C";
      console.log(tempResult);
      // callback(result);

      return tempResult;
    }
  );
}
// weatherByCity("London");

module.exports = weatherByCity;
