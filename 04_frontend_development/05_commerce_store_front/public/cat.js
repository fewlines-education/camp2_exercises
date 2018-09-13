const PG = require("pg");
let allBrands = [];


const client = new PG.Client();
client.connect();
client.query(
  "SELECT label FROM categories  ",
  function(error, result2) {
    if (error) {
      console.warn(error);
    } else {
      // result1.json(result2.rows);
      for (let i = 0; i < result2.rows.length; i++) {
        allBrands.push(result2.rows[i].label);
      }
      result1.json(allBrands);
    }
  }
);
