const orangeTree = require("./03_orange_tree");

describe("List of tests for seeding", () => {
  test("seeding should reset the tree values", () => {
    orangeTree.ageOneYear();
    orangeTree.ageOneYear();
    orangeTree.ageOneYear();
    orangeTree.seed();
    expect(orangeTree.age).toBe(0);
    expect(orangeTree.alive).toBe(true);
    expect(orangeTree.height).toBe(0);
    expect(orangeTree.oranges).toBe(0);
  });
});

describe("List of tests for picking oranges", () => {
  test("tree should not be able to be picked", () => {
    const result = orangeTree.pickAnOrange();
    expect(result).toBe(false);
  });

  test("tree should be able to be picked if there are oranges", () => {
    orangeTree.oranges = 5;
    const result = orangeTree.pickAnOrange();
    expect(result).toBe(true);
  });

  test("tree should be able to be picked after aging from 5 to 6", () => {
    orangeTree.age = 5;
    orangeTree.ageOneYear();
    const result = orangeTree.pickAnOrange();
    expect(result).toBe(true);
  });

  test("tree should be able to be picked after aging from 10 to 11", () => {
    orangeTree.age = 10;
    orangeTree.ageOneYear();
    const result = orangeTree.pickAnOrange();
    expect(result).toBe(true);
  });

  test("tree should be able to be picked after aging from 20 to 21", () => {
    orangeTree.age = 20;
    orangeTree.ageOneYear();
    const result = orangeTree.pickAnOrange();
    expect(result).toBe(true);
  });
});

describe("List of tests for growth", () => {
  test("tree should not have heights", () => {
    orangeTree.seed();
    const result = orangeTree.height;
    expect(result).toBe(0);
  });

  test("tree height should be 25 after first year", () => {
    orangeTree.seed();
    orangeTree.ageOneYear();
    const result = orangeTree.height;
    expect(result).toBe(25);
  });

  test("tree height should be 50 after second year", () => {
    orangeTree.seed();
    orangeTree.ageOneYear();
    orangeTree.ageOneYear();
    const result = orangeTree.height;
    expect(result).toBe(50);
  });

  test("tree height difference should be 10 after aging from 10 to 11", () => {
    orangeTree.seed();
    orangeTree.age = 10;
    orangeTree.ageOneYear();
    const result = orangeTree.height;
    expect(result).toBe(10);
  });

  test("tree should not be growing after 20", () => {
    orangeTree.seed();
    orangeTree.age = 20;
    orangeTree.ageOneYear();
    const result = orangeTree.height;
    expect(result).toBe(0);
  });
});

describe("List of tests for death conditions", () => {
  test("tree died when reaching 100", () => {
    orangeTree.seed();
    orangeTree.age=99;
    orangeTree.ageOneYear();
    expect(orangeTree.alive).toBe(false);
  });

  test("tree died when reaching over a 100", () => {
    orangeTree.seed();
    orangeTree.age=100;
    orangeTree.ageOneYear();
    expect(orangeTree.alive).toBe(false);
  });

  test("tree might died after 50", () => {
    orangeTree.seed();
    orangeTree.age=51;
    Math.random = jest.fn();
    orangeTree.ageOneYear();

    expect(Math.random).toHaveBeenCalled();
  });
});
