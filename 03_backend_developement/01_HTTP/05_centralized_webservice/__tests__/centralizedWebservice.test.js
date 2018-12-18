const fs = require("fs");
const path = require("path");
const readcode = require("../../../.test_utils/readcode");
const {userResume, stopCopyingMe} = require("../centralized_webservice.js")

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../centralized_webservice.js"));
  return studentCode;
});

describe("Tests series for the userResume() function", function() {
  test("Is Console.log called ?", (done) => {
    return studentCode.then( code => {

      let testData;
      fs.readFile("../04_fetch_users.result", "utf8", (err, data) => {
        testData = JSON.parse(data);
      });

      const consoleLog = jest.fn();
      console.log = consoleLog;

      const fsreadFile =
        jest.fn()
        .mockImplementationOnce((file, char, callback) => callback(null, testData))
        .mockImplementationOnce((file, char, callback) => {
          callback(null, testData);
          done();
        });

      fs.readFile = fsreadFile;

      const executedCode = eval(code);

      expect(console.log).toHaveBeenCalledTimes(1);
    });
  });