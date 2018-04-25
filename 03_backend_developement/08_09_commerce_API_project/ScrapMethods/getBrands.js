const PG = require("pg");

function getBrands(request, result1) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands ",
    function(error, result2) {
      // let allBrands = [];
      if (error) {
        console.warn(error);
      } else {
        result1.json(result2.rows);

        // for (let i = 0; i < result2.rows.length; i++) {
        //   allBrands.push(result2.rows[i].title);
        // }
        // result1.json(allBrands);
      }
    }
  );
}

module.exports = getBrands;
