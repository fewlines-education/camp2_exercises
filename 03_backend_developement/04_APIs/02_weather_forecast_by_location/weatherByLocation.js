const rq = require("request");

function weatherByLatitudeAndLongitude(lat, long){
  rq(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=6512f520642c646e2e5627ae803600c1`,
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

function weatherByZipcode(zipCode, countryCode){
  rq(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=metric&appid=6512f520642c646e2e5627ae803600c1`,
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


module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
};
