const fs = require("fs");
const path = require("path");

const cutPaste = require("../04_cut_file");

const fromPath = () => fs.realpathSync("/tmp") + "/cutPaste/file_to_copy.txt";
const toPath = () => fs.realpathSync("/tmp") + "/cutPaste/copied.txt";

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

test(`should cut an existing file`, done => {
  expect.assertions(3);
  const content = fs.readFileSync(fromPath());
  cutPaste(fromPath(), toPath());
  setTimeout(function() {
    expect(fs.existsSync(fromPath())).toEqual(false);
    expect(fs.existsSync(toPath())).toEqual(true);
    expect(fs.readFileSync(toPath())).toEqual(content);
    done();
  }, 500);
});

test(`should not cut a non existing file`, done => {
  expect.assertions(3);
  console.warn = jest.fn();
  cutPaste(path.dirname(fromPath()) + "/non-existing-file", toPath());

  setTimeout(function() {
    expect(fs.existsSync(fromPath())).toEqual(true);
    expect(fs.existsSync(toPath())).toEqual(false);
    expect(console.warn).toHaveBeenCalled();
    done();
  }, 500);
});

test(`should not cut a folder`, done => {
  expect.assertions(3);
  console.warn = jest.fn();
  cutPaste(path.dirname(fromPath()), toPath());
  setTimeout(function() {
    expect(fs.existsSync(path.dirname(fromPath()))).toEqual(true);
    expect(fs.existsSync(toPath())).toEqual(false);
    expect(console.warn).toHaveBeenCalled();
    done();
  }, 500);
});
