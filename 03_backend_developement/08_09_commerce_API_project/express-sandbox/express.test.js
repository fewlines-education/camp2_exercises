const express = require("express");
const getCategory = require("../ScrapMethods/getCategory");
const getBrands = require("../ScrapMethods/getBrands");
const getProducts = require("../ScrapMethods/getProducts");
const getBrandsId = require("../ScrapMethods/getBrandsId");
const getCategoriesId = require("../ScrapMethods/getCategoriesId");
const getProductsId = require("../ScrapMethods/getProductsId");
const getProductsFromCategory = require("../ScrapMethods/getProductsFromCategory");

const app = express();

describe(
  test("get Category Should Return correct amount of element", () =>{
    let expectation = app.get("/categories", getCategory);

    expect(result.length).toEqual(1002);

  })

  test("get Products Should Return correct amount of element", () =>{
    let expectation = app.get("/products", getProducts);

    expect(let expectation.length).toEqual(16904);

  })

  test("get Brands Should Return correct amount of element", () =>{
    let expectation = app.get("/brands", getBrands);

    expect(let expectation.length).toEqual(547);

  })
)


// console.log = jest.fn();
// expect(console.log).toHaveBeenCalled/With();
