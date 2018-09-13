const greeting = require("./greeting");

describe("the two test : ", () => {
  test("the greeting is : ", () => {

    const result = greeting("Martin");

    expect(result).toBe("Hello MARTIN!");
  });
  test("greeting failure : ", () => {
    const result = greeting(false);
    expect(result).toBe("Hello WORLD!");
  });
});
