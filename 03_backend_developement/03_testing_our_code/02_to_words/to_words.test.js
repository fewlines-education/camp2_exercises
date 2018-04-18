const spliter = require("./to_words");

describe("tests", () => {
  test("return should not be the exact same senteces", () => {
    const result = spliter("This is a + and a sentence piou.");
    expect(result).not.toEqual("This is a + and a sentence.");
  });

  test("expected result", () => {
    const result = spliter("I'm strong");
    expect(result).not.toEqual(["I'm", "strong"]);
  });
});
