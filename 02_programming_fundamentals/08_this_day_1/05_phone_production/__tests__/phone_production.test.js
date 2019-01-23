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

test("Testing if phone has the right insertSim function", () => {
  phone.validSim = false;

  expect(phone).toHaveProperty("insertSim");
  expect(phone.validSim).toBe(false);
  expect(phone.myNumber).toBe(null);

  phone.insertSim("0102030405");

  expect(phone.validSim).toBe(true);
  expect(phone.myNumber).toMatch('0102030405');
});

test("The massung has a system called Dnadroid", () => {
  expect(massung.system).toMatch("Dnadroid");
});

test("The massung has a heaphone property", () => {
  expect(massung).toHaveProperty('headphone');
  expect(massung.headphone).toBe(true);
});

test("The massung has a 6.3 screenSize", () => {
  expect(massung.screenSize).toBe(6.3);
});

test("The massung has a autodestruction function", () => {
  expect(massung).toHaveProperty('autodestruction');
});

test("The massung's autodestruction function behaves as expected", () => {
  massung.functional = true;
  massung.autodestruction();
  expect(massung.functional).toBe(false);
});

test("The jPhone has a system called JOS", () => {
  expect(jPhone.system).toMatch("JOS");
});

test("The jPhone has a 6.5 screenSize", () => {
  expect(jPhone.screenSize).toBe(6.5);
});

test("The jPhone has a batteryObsolescence function", () => {
  expect(jPhone).toHaveProperty('batteryObsolescence');
});

test("The jPhone's batteryObsolescence function behaves as expected", () => {
  jPhone.turnedOn = true;
  jPhone.batteryObsolescence();
  expect(jPhone.turnedOn).toBe(false);
});

test("Testing for personalJPhone and workJPhone", () => {
  return studentCode.then( code => {

    expect(personalJPhone.myNumber).not.toBe(null);
    expect(workJPhone.myNumber).not.toBe(null);
  });
});
