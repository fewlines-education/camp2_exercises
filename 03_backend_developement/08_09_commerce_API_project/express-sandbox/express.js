const express = require("express");
const getCategory = require("../ScrapMethods/getCategory");
const getBrands = require("../ScrapMethods/getBrands");
const getProducts = require("../ScrapMethods/getProducts");
const getBrandsId = require("../ScrapMethods/getBrandsId");
const getCategoriesId = require("../ScrapMethods/getCategoriesId");
const getProductsId = require("../ScrapMethods/getProductsId");
const getProductsFromCategory = require("../ScrapMethods/getProductsFromCategory");

const app = express();

// client.connect();

const port = process.env.PORT || 3000;

app.get("/", function (request, result) { result.send("Hello from Decat's Database!");});

app.get("/brands",getBrands);

app.get("/categories", getCategory);

app.get("/products", getProducts);

app.get("/brands/:myParam", getBrandsId);

app.get("/categories/:myParam", getCategoriesId);

app.get("/products/:myParam",getProductsId);

app.get("/categories/:myParam/products", getProductsFromCategory);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

module.exports = {

}
