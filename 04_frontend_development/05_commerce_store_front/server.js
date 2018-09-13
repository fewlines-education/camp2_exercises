const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const PG = require("pg");

// const getCategory = require("./getCat.js");

app.use(express.static("public"));

app.listen(3000, function () {
  console.log("Server listening on port:" + 3000);
});

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/categories", function getCat(request, result) {
  const client = new PG.Client();
  client.connect();
  return client.query(
    "SELECT label FROM categories  "
  ).then((response) => {
    let allBrands = [];
    for (let i = 0; i < response.rows.length; i++) {
      allBrands.push(response.rows[i].label);
    }
    return allBrands;
  }
).then((response)=> result.render("categories", {board: response}));
});

app.get("/categories/:myParam", function getCatId(request, result) {
  const client = new PG.Client();
  client.connect();
  return client.query(
    "SELECT id FROM categories WHERE label= $1::text",[request.params.myParam])
    .then((response) => {
      let allBrands = [];
      for (let i = 0; i < response.rows.length; i++) {
        allBrands.push(response.rows[i].id);
      }
      console.log(allBrands);
      return allBrands;})
    .then((response) => {
      client.query("SELECT p.products_title FROM categories_products p WHERE p.categories_decathlon_id = $1::uuid", [response[0]])
    .then((response)=> {
      let allBrands = [];
      for (let i = 0; i < response.rows.length; i++) {
        allBrands.push(response.rows[i].products_title);
      }
      result.render("Products", {board: allBrands})});
    });
});

// app.get("/categories/products/:itemId", function getItem(request,result){
//   const client = new PG.Client();
//   client.connect();
//   return client.query(
// });



//SELECT c.label FROM categories c WHERE c.id = $1::uuid

// function getCategoriesId(request, result1) {
//   const client = new PG.Client();
//   client.connect();
//   client.query(
//     "SELECT c.label FROM categories c WHERE c.id = $1::uuid",
//     [request.params.myParam],
//     function(error, result2) {
//       // const allBrands = [];
//       if (error) {
//         console.warn(error);
//       } else {
//         result1.json(result2.rows);
//       }
//     }
//   );
// }

// module.exports = getCategoriesId;

// app.get("/categories/:myParam", getCategoriesId);

// ).then(for (let i = 0; i < result2.rows.length; i++) {
//   allBrands.push(result2.rows[i].label);
// })
// .then((result) => result

app.get("/", function(request, result) {
  result.render("home", {title: "toto"});
});
