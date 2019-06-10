let shell = require('shelljs');


function emergency() {
  let contact = shell.exec('curl -s http://jsonplaceholder.typicode.com/users/2', {async:true});
  

}

module.exports = {emergency};
