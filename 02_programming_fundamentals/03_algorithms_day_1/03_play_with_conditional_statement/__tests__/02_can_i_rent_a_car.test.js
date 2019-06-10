/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("../../../.test_utils/readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../02_can_i_rent_a_car.js"));
  return studentCode;
});

function getStudentCode(code, testData) {
  return code.replace(
    /const\s*?driverData\s*?=\s*?require\(('|")\.\/\.driver_data('|")\);/,
    "const driverData = " + JSON.stringify(testData)
  );
}

test("canRentACar should exist", () => {
  return studentCode.then(code => {
    const testData = {
      driverLicense: "B1",
      licenseIssued: 2001,
      numberOfAccident: 0,
      bonus: 0.8
    };
    const testStudentCode = getStudentCode(code, testData);
    const canRentACar = eval(testStudentCode + "; canRentACar;");

    expect(canRentACar).toBeDefined();
    expect(typeof canRentACar).toBe("boolean");
  });
});

test("should return false if license is not at least B", () => {
  return studentCode.then(code => {
    const testData = {
      driverLicense: "A",
      licenseIssued: 2001,
      numberOfAccident: 0,
      bonus: 0.8
    };
    const testStudentCode = getStudentCode(code, testData);
    const canRentACar = eval(testStudentCode + "; canRentACar;");

    expect(canRentACar).toBe(false);
  });
});

test("should return false if license was issued this year", () => {
  return studentCode.then(code => {
    const testData = {
      driverLicense: "B",
      licenseIssued: (new Date()).getFullYear(),
      numberOfAccident: 0,
      bonus: 0.8
    };
    const testStudentCode = getStudentCode(code, testData);
    const canRentACar = eval(testStudentCode + "; canRentACar;");

    expect(canRentACar).toBe(false);
  });
});

test("should return false if there was accidents and the bonus is too low", () => {
  return studentCode.then(code => {
    const testData = {
      driverLicense: "B",
      licenseIssued: 2001,
      numberOfAccident: 1,
      bonus: 0.6
    };
    const testStudentCode = getStudentCode(code, testData);
    const canRentACar = eval(testStudentCode + "; canRentACar;");

    expect(canRentACar).toBe(false);
  });
});

test("should return true if there was accidents but the bonus is enough", () => {
  return studentCode.then(code => {
    const testData = {
      driverLicense: "B",
      licenseIssued: 2001,
      numberOfAccident: 1,
      bonus: 0.8
    };
    const testStudentCode = getStudentCode(code, testData);
    const canRentACar = eval(testStudentCode + "; canRentACar;");

    expect(canRentACar).toBe(true);
  });
});
