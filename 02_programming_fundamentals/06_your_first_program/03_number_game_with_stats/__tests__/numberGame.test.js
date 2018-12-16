const fs = require("fs");
const path = require("path");
const readcode = require("../../../.test_utils/readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../number_game.js"));
  return studentCode;
});

test("should work", () => {
  return studentCode.then(code => {
    const random = jest.fn();
    random.mockReturnValueOnce(0.13);
    Math.random = random;

    const consoleLog = jest.fn();
    console.log = consoleLog;

    const readline = require("readline");
    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback("13"));

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));

    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(question).toHaveBeenCalledTimes(1);
  });
});

test("handle non number inputs", () => {
  return studentCode.then(code => {
    const random = jest.fn();
    random.mockReturnValueOnce(0.42);
    Math.random = random;

    const consoleLog = jest.fn();
    console.log = consoleLog;

    const readline = require("readline");
    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback("Hello"))
      .mockImplementationOnce((text, callback) => {
        expect(text).toEqual("This was not a number\n");
        callback("42");
      });

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));

    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(consoleLog).toHaveBeenCalledWith("You won in 2 steps!");
    expect(question).toHaveBeenCalledTimes(2);
  });
});

test("handle not in range inputs", () => {
  return studentCode.then(code => {
    const random = jest.fn();
    random.mockReturnValueOnce(0.86);
    Math.random = random;

    const consoleLog = jest.fn();
    console.log = consoleLog;

    const readline = require("readline");
    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback("-5"))
      .mockImplementationOnce((text, callback) => {
        expect(text).toEqual("The number is between 1 and 100\n");
        callback("1337");
      })
      .mockImplementationOnce((text, callback) => {
        expect(text).toEqual("The number is between 1 and 100\n");
        callback("86");
      });

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));

    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(consoleLog).toHaveBeenCalledWith("You won in 3 steps!");
    expect(question).toHaveBeenCalledTimes(3);
  });
});

test("handle too low numbers", () => {
  return studentCode.then(code => {
    const random = jest.fn();
    random.mockReturnValueOnce(0.77);
    Math.random = random;

    const consoleLog = jest.fn();
    console.log = consoleLog;

    const readline = require("readline");
    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback("21"))
      .mockImplementationOnce((text, callback) => {
        expect(text).toEqual("Too low\n");
        callback("77");
      });

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));

    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(consoleLog).toHaveBeenCalledWith("You won in 2 steps!");
    expect(question).toHaveBeenCalledTimes(2);
  });
});

test("handle too high numbers", () => {
  return studentCode.then(code => {
    const random = jest.fn();
    random.mockReturnValueOnce(0.35);
    Math.random = random;

    const consoleLog = jest.fn();
    console.log = consoleLog;

    const readline = require("readline");
    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback("52"))
      .mockImplementationOnce((text, callback) => {
        expect(text).toEqual("Too high\n");
        callback("35");
      });

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));

    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(consoleLog).toHaveBeenCalledWith("You won in 2 steps!");
    expect(question).toHaveBeenCalledTimes(2);
  });
});
