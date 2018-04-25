const express = require("express");
const PG = require("pg");
const request = require("request");
const client = new PG.Client();

const app = express();

client.connect();

const port = process.env.PORT || 3000;

let i = 0;

client.query(
  "SELECT id FROM categories c",
  function(error, result){
    const idKey = result.rows;
    // console.log(idKey[9].id);
    const listUUIDCategories = [];
    for (let i = 0; i < idKey.length; i++) {
      listUUIDCategories.push(idKey[i].id);
    }
    // console.log(listUUIDCategories);
    const boardLength = listUUIDCategories.length;
    console.log(boardLength);
    // while(i<=boardLength){
    listUUIDCategories.forEach(lookToAPI, boardLength);
    // }
    // client.end();
  }
);

function lookToAPI(CatUUID, total){
  request(`https://decath-product-api.herokuapp.com/categories/${CatUUID}/products`,
    (error, response, resultRequest) => {
      if(error){
        console.warn(error, "\n", "yopoy");
      }
      else{
        // console.log(CatUUID);
        // console.log(resultRequest);
        let allTitles = [];
        const dataRequested = JSON.parse(resultRequest);
        dataRequested.forEach(cell => getKey(cell, allTitles));
        console.log("lenght of the current board is : ", allTitles.length);

        allTitles.map(value => addToTable(CatUUID, value));

        // if(i>=total){
        //   console.log("reached end youhouuuu");
        //   client.end();
        // }
      }
      // console.log("\n");
      // result.end(resultRequest);
    }
  );
}

function getKey(cell, matrix){
  // matrix.push(cell.id);
  matrix.push(cell.title);
}

function addToTable(idName,resultRequest){
  client.query(
    "INSERT INTO categories_products (categories_decathlon_id, products_title) VALUES ($1::uuid, $2::text)",
    [idName, resultRequest],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        i++;
        console.log(i);
        console.log("Added : ", resultRequest);
      }

      if(i === Flag){
        client.end();
      }
      // if(i>=boardLength){
      //   client.end();
      //   return;
      // }
    }
  );
}
// lookToAPI("lol");
