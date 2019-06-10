/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("../../../.test_utils/readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../09_filtering_with_while.js")
  );
  return studentCode;
});

test("print numbers from zero to nine", () => {
  return studentCode.then(code => {
    numbers = [];
    _consolelog = console.log;
    console.log = thing => numbers.push(thing);

    eval(code);

    console.log = _consolelog;

    expect(numbers).toEqual(["one", "three", "five", "seven", "nine"]);
  });
});

test("one while was used", () => {
  return studentCode.then(code => {
    const whiles = code.match(/while(\s*?)\(.*?\)/gm);

    expect(whiles).toBeTruthy();
    expect(whiles.length).toBe(1);
  });
});
