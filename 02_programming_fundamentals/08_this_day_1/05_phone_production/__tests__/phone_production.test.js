const fs = require("fs");
const path = require("path");
const readcode = require("../../../.test_utils/readcode");
const {phone, massung, jPhone, personalJPhone, workJPhone} = require("../05_phone_production.js")

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../05_phone_production.js"));
  return studentCode;
});

test("Testing if massung has the right properties", () => {
  massung.functional = true;
  massung.autodestruction();
  expect(massung).toHaveProperty('autodestruction');
  expect(massung).toHaveProperty('headphone');
  expect(massung.headphone).toBe(true);
  expect(massung.system).toMatch("Dnadroid");
  expect(massung.screenSize).toBe(6.3);
  expect(massung.functional).toBe(false);
});

test("Testing if jPhone has the right properties", () => {
  jPhone.turnedOn = true;
  jPhone.batteryObsolescence();
  expect(jPhone).toHaveProperty('batteryObsolescence');
  expect(jPhone.system).toMatch("JOS");
  expect(jPhone.screenSize).toBe(6.5);
  expect(jPhone.turnedOn).toBe(false);
});

test("Testing if phone has the right insertSim function", () => {
  phone.validSim = false;

  expect(phone).toHaveProperty("insertSim");
  expect(phone.validSim).toBe(false);
  expect(phone.myNumber).toBe(null);

  phone.insertSim("0102030405");

  expect(phone.validSim).toBe(true);
  expect(phone.myNumber).toMatch('0102030405');
});

test("Testing for personalJPhone and workJPhone", () => {
  return studentCode.then( code => {

    expect(personalJPhone.myNumber).not.toBe(null);
    expect(workJPhone.myNumber).not.toBe(null);
  });
});
