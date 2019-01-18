function helloSailor(who) {
  if (who) {
    console.log(`Howdy ${who}!`);
  } else {
    console.log("Howdy Sailor! Good day to you!");
  }
}

module.exports = helloSailor;
