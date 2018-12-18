beforeEach(() => {
  jest.resetModules()
})


describe("Tests series for the emergency function", function() {
  test("has console log been called and prints the name?", (mockdone) => {

    expect.assertions(1);

    jest.mock("shelljs", () => {
      return {exec: jest.fn().mockImplementation((bashCommand, asyncFlag) => ({
        stdout: {
          on: jest.fn().mockImplementation((dataString, callback) => {
            callback(JSON.stringify({
              name : "completeInfo.name",
              phone : "completeInfo.phone",
              company : {name: "acme"}
            }));
            mockdone();
          })
        }
      }))}
    })

    const machine = require("../03_coffee_machine");
    const {emergency} = require("../codeTesting");

    machine.litersOfCoffee = 0;

    const originalLog = console.log
    logger = jest.fn();
    console.log = logger;

    machine.fillWithLitersOfCoffee(0.99);
    machine.expresso();

    expect(logger).toHaveBeenCalled();

  })

  test("has the right contact been uploaded?", (mockdone) => {
    expect.assertions(2);

    const mockexec = jest.fn().mockImplementation(() => ({
      stdout: {on: () => {}}
    }))
    jest.mock("shelljs",() => {
      return {exec: mockexec}
    });
    mockdone()

    const machine = require("../03_coffee_machine");

    machine.fillWithLitersOfCoffee(0.99);
    machine.expresso();

    expect(mockexec).toHaveBeenCalled();
    expect(mockexec.mock.calls[0][0]).toEqual(expect.stringMatching(/http:\/\/jsonplaceholder.typicode.com\/users\/2/g))

  })

  test("emergency should not be called with more than 1 liter of coffee", (mockdone) => {
    expect.assertions(1);

    const mockexec = jest.fn().mockImplementation(() => ({
      stdout: {on: () => {}}
    }))
    jest.mock("shelljs",() => {
      return {exec: mockexec}
    });
    mockdone()

    const machine = require("../03_coffee_machine");

    machine.fillWithLitersOfCoffee(1.2);
    machine.expresso();

    expect(mockexec).not.toHaveBeenCalled();

  })
})