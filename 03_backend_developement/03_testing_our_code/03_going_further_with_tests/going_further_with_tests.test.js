/* global beforeEach */

let mockArray = [];
let mockObject = {};

beforeEach(() => {
  mockArray = [];
  mockObject = {};
});

describe("Let the tests on arrays begin !", () => {

  //The following arrays are a short list of "must watch" movies. Write a test for each of them, respecting the conditions written in the requirements.
  //Be sure to always test if you test passes with the right conditions but also if it does fail with the wrong conditions.

  //Create a test that ensures that "Alien the 8th passenger" is present in mockArray
  mockArray = ["Into the wild", "Alien the 8th passenger","Ip Man","Tombeau des lucioles", "fight club"];

  //Create a test that fails if "Indiana Jones 4" is present in mockArray
  mockArray = ["Into the wild", "Alien the 8th passenger","Ip Man","Tombeau des lucioles", "fight club"];

  //Create a test fails if the list has less than 5 elements
  mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

  //Create a test that checks if the array only contains String element
  mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

  //Create a test that passes if there's at least one film with "lord of the rings" inside mockArray
  mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

});

describe("Let the tests on objects begin !", () => {

//Create a test that ensures that your command contains at least `fries: true` and `sauce: "Hannibal"`
  mockObject = {
    sauce: "Hannibal",
    fries: true,
    kebab: "Double",
    soda: "Sprite",
  };

  //Create a test that checks if the elements in mockArray respect that the strings are the same with the right order as solutionArray
  //eg : mockArray = ["Blue","Blue","Red", "Yellow"] would fail the test
  mockArray = ["Blue", "Red", "Blue", "Yellow"];
  const solutionArray = ["Blue", "Red", "Blue", "Yellow"];
});

//At the end, your file should contain 7 test.
