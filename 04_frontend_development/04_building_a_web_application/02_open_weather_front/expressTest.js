const express = require("express");
const app = express();
const rq = require("request");
const fetch = require("node-fetch");
const PG = require("pg");
const client = new PG.Client();
const path = require("path");

// client.connect();
let weatherTag;
let cityParam;

const port = process.env.PORT || 3000;

app.get("/",function(req,res){
  // console.log(path.join(__dirname,"index.html"));
     res.sendFile(path.join(__dirname,"index.html"));
});
// function getLille(){
//   app.get("/Lille",function(req,res){
//     // console.log(path.join(__dirname,"index.html"));
//       // cityParam = req.params.tagId;
//       fetch(`http://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&appid=bca262add92c9ed101258da9e961b2b3`
//         , {method:"GET"})
//         .then((result) => result.json())
//         .then((result) => res.send(result.weather[0].main))
//         .catch();
//       // weatherTag = weatherByCity(req.params.tagId);
//       // res.sendFile(path.join(__dirname,"index.html"));
//   });
// }
function getCity(){
  app.get("/:tagId",function(req,res){
    // console.log(path.join(__dirname,"index.html"));
      cityParam = req.params.tagId;
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityParam}&units=metric&appid=bca262add92c9ed101258da9e961b2b3`
        , {method:"GET"})
        .then((result) => result.json())
        .then((result) => res.send(result.weather[0].main))
        .then((result) => {
          
        })
        .catch();
      // weatherTag = weatherByCity(req.params.tagId);
      // res.sendFile(path.join(__dirname,"index.html"));
  });
}

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

module.exports = getCity();
