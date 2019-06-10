const child_process = require("child_process");
const fs = require("fs");
const path = require("path");

let studentCode;

afterEach(() => {
  jest.resetModules();
})

describe("Tests series for the userResume() function", function() {
  test("Is Console.log called 10 times ?", (done) => {
    return studentCode.then( code => {

      const testDataUser = fs.readFileSync(path.resolve(__dirname, "fetch_users.result"), "utf8");
      const testDataPost = fs.readFileSync(path.resolve(__dirname, "fetch_posts.result"), "utf8");

      const consoleLog = jest.fn();
      console.log = consoleLog;

      const mockExec =
        jest.fn()
          .mockImplementation((path, callback) => callback(null));


      const fsreadFile =
        jest.fn()
          .mockImplementationOnce((file, char, callback) => callback(null, testDataUser))
          .mockImplementationOnce((file, char, callback) => {
            callback(null, testDataPost);

            expect(console.log).toHaveBeenCalledTimes(10);
            done();
          });

      child_process.exec = mockExec;
      fs.readFile = fsreadFile;

      const {userResume} = require("../centralized_webservice.js");

      userResume();
    });
  });

  test("Is console.log called in the right order?", (done) => {
    return studentCode.then( code => {

      const testDataUser = fs.readFileSync(path.resolve(__dirname, "fetch_users.result"), "utf8");
      const testDataPost = fs.readFileSync(path.resolve(__dirname, "fetch_posts.result"), "utf8");

      const consoleLog = jest.fn();
      console.log = consoleLog;

      const mockExec =
        jest.fn()
          .mockImplementation((path, callback) => callback(null));


      const fsreadFile =
        jest.fn()
          .mockImplementationOnce((file, char, callback) => callback(null, testDataUser))
          .mockImplementationOnce((file, char, callback) => {
            callback(null, testDataPost);

            expect(console.log).toHaveBeenNthCalledWith(1,"My name is Bret and my first post is quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
            expect(console.log).toHaveBeenNthCalledWith(2,"My name is Antonette and my first post is delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi");
            expect(console.log).toHaveBeenNthCalledWith(3,"My name is Samantha and my first post is repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt");
            expect(console.log).toHaveBeenNthCalledWith(4,"My name is Karianne and my first post is debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae");
            expect(console.log).toHaveBeenNthCalledWith(5,"My name is Kamren and my first post is molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe");
            expect(console.log).toHaveBeenNthCalledWith(6,"My name is Leopoldo_Corkery and my first post is sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem");
            expect(console.log).toHaveBeenNthCalledWith(7,"My name is Elwyn.Skiles and my first post is ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit");
            expect(console.log).toHaveBeenNthCalledWith(8,"My name is Maxime_Nienow and my first post is occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis");
            expect(console.log).toHaveBeenNthCalledWith(9,"My name is Delphine and my first post is facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut");
            expect(console.log).toHaveBeenNthCalledWith(10,"My name is Moriah.Stanton and my first post is libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat");
            done();
          });

      child_process.exec = mockExec;
      fs.readFile = fsreadFile;

      const {userResume} = require("../centralized_webservice.js");

      userResume();
    });
  });
});

describe("Tests series for the stopCopyingMe() function", function() {
  test("Is exec called 101 times (1 fetch_comments and 100 publish_comment)?", (done) => {
    return studentCode.then( code => {

      const testDataComments = fs.readFileSync(path.resolve(__dirname, "fetch_comments.result"), "utf8");

      const consoleLog = jest.fn();
      console.log = consoleLog;

      const mockExec =
        jest.fn()
          .mockImplementation((path, callback) => callback(null));

      const fsreadFile =
        jest.fn()
          .mockImplementationOnce((file, char, callback) => {
            callback(null, testDataComments);

            expect(child_process.exec).toHaveBeenCalledTimes(101);

            done();
          });

      child_process.exec = mockExec;
      fs.readFile = fsreadFile;

      const {stopCopyingMe} = require("../centralized_webservice.js");

      stopCopyingMe();
    });
  });

  test("Is fetch_comments called with the first exec call ?", (done) => {
    return studentCode.then( code => {

      const testDataComments = fs.readFileSync(path.resolve(__dirname, "fetch_comments.result"), "utf8");

      const consoleLog = jest.fn();
      console.log = consoleLog;

      const mockExec =
        jest.fn()
          .mockImplementation((path, callback) => callback(null));

      const fsreadFile =
        jest.fn()
          .mockImplementationOnce((file, char, callback) => {
            callback(null, testDataComments);

            expect(child_process.exec.mock.calls[0][0]).toEqual(expect.stringMatching(/(sh .\/shell_functions\/fetch_comments.sh)/g));

            done();
          });

      child_process.exec = mockExec;
      fs.readFile = fsreadFile;

      const {stopCopyingMe} = require("../centralized_webservice.js");

      stopCopyingMe();
    });
  });

  test("Is publish_comment called 100 times?", (done) => {
    return studentCode.then( code => {

      const testDataComments = fs.readFileSync(path.resolve(__dirname, "fetch_comments.result"), "utf8");

      const consoleLog = jest.fn();
      console.log = consoleLog;

      const mockExec =
        jest.fn()
          .mockImplementation((path, callback) => callback(null));

      const fsreadFile =
        jest.fn()
          .mockImplementationOnce((file, char, callback) => {
            callback(null, testDataComments);

            for(let i = 1; i<=100; i++){
              expect(child_process.exec.mock.calls[i][0]).toEqual(expect.stringMatching(/(sh .\/shell_functions\/publish_comment.sh)/g));
            }

            done();
          });

      child_process.exec = mockExec;
      fs.readFile = fsreadFile;

      const {stopCopyingMe} = require("../centralized_webservice.js");

      stopCopyingMe();
    });
  });


});
