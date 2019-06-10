const fs = require("fs");
const path = require("path");

const copyPaste = require("../03_copy_file");

const fromPath = () => fs.realpathSync("/tmp") + "/copyPaste/file_to_copy.txt";
const toPath = () => fs.realpathSync("/tmp") + "/copyPaste/copied.txt";

console.warn = () => {};

const createTreeStructure = () => {
  if (!fs.existsSync(path.dirname(fromPath()))) {
    fs.mkdirSync(path.dirname(fromPath()));
  }

  if (!fs.existsSync(fromPath())) {
    fs.writeFileSync(fromPath(), "Hello World");
  }

  if (fs.existsSync(toPath())) {
    fs.unlinkSync(toPath());
  }
};

const removeTreeStructure = () => {
  if (fs.existsSync(fromPath())) {
    fs.unlinkSync(fromPath());
  }

  if (fs.existsSync(toPath())) {
    fs.unlinkSync(toPath());
  }

  if (fs.existsSync(path.basename(fromPath()))) {
    fs.rmdirSync(path.basename(fromPath()));
  }
};

afterEach(removeTreeStructure);
beforeEach(createTreeStructure);

test(`should copy an existing file`, done => {
  expect.assertions(3);
  copyPaste(fromPath(), toPath());
  setTimeout(function() {
    expect(fs.existsSync(fromPath())).toEqual(true);
    expect(fs.existsSync(toPath())).toEqual(true);
    expect(fs.readFileSync(fromPath())).toEqual(fs.readFileSync(toPath()));
    done();
  }, 500);
});

test(`should not copy a non existing file`, done => {
  expect.assertions(2);
  copyPaste(path.dirname(fromPath()) + "/non-existing-file", toPath());
  setTimeout(function() {
    expect(fs.existsSync(fromPath())).toEqual(true);
    expect(fs.existsSync(toPath())).toEqual(false);
    done();
  }, 500);
});

test(`should not copy a folder`, done => {
  expect.assertions(2);
  copyPaste(path.dirname(fromPath()), toPath());
  setTimeout(function() {
    expect(fs.existsSync(path.dirname(fromPath()))).toEqual(true);
    expect(fs.existsSync(toPath())).toEqual(false);
    done();
  }, 500);
});

test(`should not copy if the destination already exists`, done => {
  expect.assertions(3);
  fs.writeFileSync(toPath(), "My Content");

  copyPaste(path.dirname(fromPath()), toPath());
  setTimeout(function() {
    expect(fs.existsSync(path.dirname(fromPath()))).toEqual(true);
    expect(fs.existsSync(toPath())).toEqual(true);
    expect(fs.readFileSync(toPath(), "utf-8")).toEqual("My Content");
    done();
  }, 500);
});
