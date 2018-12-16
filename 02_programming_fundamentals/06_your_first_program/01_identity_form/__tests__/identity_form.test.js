const fs = require("fs");
const path = require("path");
const readcode = require("../../../.test_utils/readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../identity_form.js"));
  return studentCode;
});

test("Console.log prints out the text entered", () => {
  return studentCode.then(code => {
    const readline = require("readline");

    const consoleLog = jest.fn();
    console.log = consoleLog;

    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback("Martin"))
      .mockImplementationOnce((_text, callback) => callback("Vielvoye"))
      .mockImplementationOnce((_text, callback) => callback("42"));

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));
    // .toMatch()
    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(console.log.mock.calls[0][0]).toMatch(RegExp("martin", "i"));
    expect(console.log.mock.calls[0][0]).toMatch(RegExp("vielvoye", "i"));
    expect(console.log.mock.calls[0][0]).toMatch("42");
    expect(question).toHaveBeenCalledTimes(3);
  });
});

test("The programs asks three distinct questions", () => {
  return studentCode.then(code => {
    const readline = require("readline");

    const consoleLog = jest.fn();
    console.log = consoleLog;

    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback(""))
      .mockImplementationOnce((_text, callback) => callback(""))
      .mockImplementationOnce((_text, callback) => callback(""));

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));
    // .toMatch()
    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(question).toHaveBeenCalledTimes(3);
  });
});

test("Console.log testing", () => {
  return studentCode.then(code => {
    const readline = require("readline");

    const originalConsoleLog = console.log;
    const consoleLog = jest.fn();
    console.log = consoleLog;

    const question = jest
      .fn()
      .mockImplementationOnce((_text, callback) => callback("Martin"))
      .mockImplementationOnce((_text, callback) => callback("Vielvoye"))
      .mockImplementationOnce((_text, callback) => callback("42"));

    const reader = jest.fn(_object => ({
      question: question,
      close: jest.fn()
    }));
    // .toMatch()
    readline.createInterface = reader;

    const executedCode = eval(code);

    expect(console.log.mock.calls[0][0]).toMatch(RegExp("martin", "i"));
    expect(console.log.mock.calls[0][0]).toMatch(RegExp("vielvoye", "i"));
    expect(console.log.mock.calls[0][0]).toMatch("42");
    expect(question).toHaveBeenCalledTimes(3);
    console.log = originalConsoleLog;
  });
});

test("Stream has been closed", () => {
  return studentCode.then(code => {
    const question = jest
      .fn()
      .mockImplementation((_text, callback) => callback("aze"));
    // .mockImplementationOnce((_text, callback) => callback("Martin"))
    // .mockImplementationOnce((_text, callback) => callback("Vielvoye"))
    // .mockImplementationOnce((_text, callback) => callback("42"));
    const readerClose = jest.fn();
    const reader = jest.fn(_object => ({
      question: question,
      close: readerClose
    }));
    // reader.close = readerClose;
    // reader.close = close;
    // .toMatch()
    const readline = require("readline");
    readline.createInterface = reader;

    const executedCode = eval(code);
    // console.log(reader.close);
    // console.log(readerClose);
    // console.log(reader().close);
    expect(readerClose).toHaveBeenCalled();
  });
});
