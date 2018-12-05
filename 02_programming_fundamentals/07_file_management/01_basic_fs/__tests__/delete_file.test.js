const fs = require("fs");
const path = require("path");

const deleteFile = require("../02_delete_file");

const fileToRemove = () =>
  fs.realpathSync("/tmp") + "/deleteFile/file_to_rm.txt";

const createTreeStructure = () => {
  if (!fs.existsSync(path.dirname(fileToRemove()))) {
    fs.mkdirSync(path.dirname(fileToRemove()));
  }

  if (!fs.existsSync(fileToRemove())) {
    fs.writeFileSync(fileToRemove(), "Hello World");
  }
};

const removeTreeStructure = () => {
  if (fs.existsSync(fileToRemove())) {
    fs.unlinkSync(fileToRemove());
  }

  if (fs.existsSync(path.basename(fileToRemove()))) {
    fs.rmdirSync(path.basename(fileToRemove()));
  }
};

afterEach(removeTreeStructure);
beforeEach(createTreeStructure);

test(`should remove an existing file`, done => {
  expect.assertions(1);
  deleteFile(fileToRemove());
  setTimeout(function() {
    expect(fs.existsSync(fileToRemove())).toEqual(false);
    done();
  }, 500);
});

test(`should not remove a non existing file`, done => {
  expect.assertions(1);
  console.warn = jest.fn();
  deleteFile(path.dirname(fileToRemove()) + "/non-existing-file");
  setTimeout(function() {
    expect(console.warn).toHaveBeenCalled();
    done();
  }, 500);
});

test(`should not remove a folder`, done => {
  expect.assertions(2);
  console.warn = jest.fn();
  deleteFile(path.dirname(fileToRemove()));
  setTimeout(function() {
    expect(fs.existsSync(path.dirname(fileToRemove()))).toEqual(true);
    expect(console.warn).toHaveBeenCalled();
    done();
  }, 500);
});
