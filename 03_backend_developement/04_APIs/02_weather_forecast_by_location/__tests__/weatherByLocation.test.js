const weatherByLocation = require("../weatherByLocation");

describe("#weatherByLatitudeAndLongitude()", () => {
  it("should print temperature", done => {
    expect.assertions(1);
    console.log = jest.fn();
    weatherByLocation.weatherByLatitudeAndLongitude(3.0586, 50.633);
    setTimeout(function() {
      expect(console.log).toHaveBeenCalledWith("11.31°C");
      done();
    }, 200);
  });
});

describe("#weatherByZipcode()", () => {
  it("should  print temperature", done => {
    expect.assertions(1);
    console.log = jest.fn();
    weatherByLocation.weatherByZipcode(59000, "fr");
    setTimeout(function() {
      expect(console.log).toHaveBeenCalledWith("11.31°C");
      done();
    }, 200);
  });
});
