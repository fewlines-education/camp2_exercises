const weatherByCity = require("../weatherByCity");

describe("#weatherByCity()", () => {
  it("should load weather data in metric units", done => {
    expect.assertions(1);
    console.log = jest.fn();
    weatherByCity("London");
    setTimeout(function() {
      expect(console.log).toHaveBeenCalledWith("5.55°C");
      done();
    }, 200);
  });
});
