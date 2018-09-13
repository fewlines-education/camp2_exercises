const helloSailor = require("./hello_sailor");

describe("tests", () => {
  test("should call console log and print the correct text", () => {
    console.log = jest.fn();

    helloSailor("Martin");

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith("Howdy Martin!");
  });

  test("should call console log and not print anything", () => {
    console.log = jest.fn();

    helloSailor();

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  });

});
