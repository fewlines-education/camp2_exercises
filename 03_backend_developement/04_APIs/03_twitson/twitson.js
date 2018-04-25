const request = require("request");
// const port = (process.env.PORT || 3000);
const OAuth = require("OAuth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

let twitterText = "";
oauth.get(url + "elonmusk", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET,
  function (error, data) {
    if (error) {
      console.log("ligne 19",error);
    }
    else {

      const text = JSON.parse(data).map(function (tweet) {
        return tweet.text;
      });
      text.forEach(cell => {
        if(cell.includes("… https")){
          const tempUrl = cell.substring(cell.length - 23, cell.length);
          console.log("hey it got it");
          getTempUrl(tempUrl);
        }
      });
      twitterText = text.join(" ");
    }
    const text = twitterText;
    const uri = encodeURI(watsonUrl + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

    request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
      const emotionObj = JSON.parse(body).emotion.document.emotion;
      console.log("Sadness is : " + emotionObj.sadness);
      console.log("Joy is : " + emotionObj.joy);
    });
    // console.log(twitterText);
  }
);

function getTempUrl(tempUrl){
  oauth.get(tempUrl, function(error, data) {
    const tempText = JSON.parse(data).map(function (tweet) {
      return tweet.text;
    });
    console.log(tempText);
  });
}

const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const watsonUrl = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
