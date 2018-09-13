const OAuth = require("oauth");
const request = require("request");
const fetch = require("node-fetch");


const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);
const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

function twitson(twitterUsername) {
  return new Promise(function (resolve, reject){
    oauth.get(
      url + twitterUsername,
      process.env.TWITTER_ACCESS_TOKEN,
      process.env.TWITTER_ACCESS_SECRET,
      function (error, data) {
        const tweets = JSON.parse(data);
        function getText(element) {
          return element.text;
        }
        const texts = tweets.map(getText).join("\n\n");
        const username = process.env.WATSON_USERNAME;
        const password = process.env.WATSON_KEY;
        const url = process.env.WATSON_URL;

        const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
        const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + texts);
        // answer.push(auth).push(uri);
        const answer = [auth, uri];
        console.log("plop");
        resolve(answer);
      }
    );});


  // promise1.then((answer) => {
  //   console.log("i went here !");
  //   callTo(answer[1], answer[0]);
  // });
}

function callTo(url, auth){
  return fetch(url, {headers: { "Authorization": auth } })
    .then((result) => console.log("final log is :", result.json()));
}
twitson("neiltyson").then((answer) => {
  console.log("i went here !");
  callTo(answer[1], answer[0]);});
// twitson("neiltyson")
//   .then(watsonResult => {
//     console.log("sentiments", watsonResult.sentiment);
//     console.log("emotions", watsonResult.emotion);
//   });
