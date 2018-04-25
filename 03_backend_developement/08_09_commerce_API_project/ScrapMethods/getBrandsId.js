const PG = require("pg");

function getBrandsId(request, result1) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT b.title FROM brands b WHERE b.id = $1::uuid",
    [request.params.myParam],
    function(error, result2) {
      // const allBrands = [];
      if (error) {
        console.warn(error);
      } else {
        result1.json(result2.rows);
      }
    }
  );
}

module.exports = getBrandsId;
