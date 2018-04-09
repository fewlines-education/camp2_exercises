const log = (text) => console.log(text);

// A function that takes two parameters, this first one being an object like below
// and the second one being a callback function.
const getInput = (userId, callback) => {
  callback(userId.key);
};

getInput({user: "Lorem", key: "arrow_up"}, log);
