const PG = require("pg");
const request = require("request");
const client = new PG.Client();

client.connect();

let i = 0;
let boardLength;

//Change by hand the URL for the wanted page
request("https://decath-product-api.herokuapp.com/brands", (error, response, result) => {
  treatResponse(result);
});

//Change by hand the function inside the map function the wanted funciton
function treatResponse(result){
  i=0;
  const dataRequested = JSON.parse(result);
  boardLength = dataRequested.length;
  dataRequested.map(insertBrandsToTable);
  // dataRequested.map(insertProductsToTable);
  // dataRequested.map(insertCategoriesToTable);

  return dataRequested;
}

function insertBrandsToTable(line){
  client.query(
    "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::text)",
    [line.id, line.title],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        i++;
      }
      if(i>=boardLength){
        client.end();
        return;
      }
    }
  );
}

function insertCategoriesToTable(line){
  client.query(
    "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid, $2::integer, $3::text)",
    [line.id, line.decathlon_id, line.label],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        i++;
      }
      if(i>=boardLength){
        client.end();
        return;
      }
    }
  );
}

function insertProductsToTable(line){
  client.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid, $2::integer, $3::text, $4::text, $5::text, $6::float, $7::float, $8::float, $9::integer, $10::text, $11::float)",
    [line.id, line.decathlon_id, line.title, line.description, line.brand_id, line.min_price, line.max_price, line.crossed_price, line.percent_reduction, line.image_path, line.rating],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        i++;
      }
      if(i>=boardLength){
        client.end();
        return;
      }
    }
  );
}


// INSERT INTO Customers (CustomerName, City,
// INSERT INTO Customers (CustomerName, City, Country)
// VALUES ('Cardinal', 'Stavanger', 'Norway');
