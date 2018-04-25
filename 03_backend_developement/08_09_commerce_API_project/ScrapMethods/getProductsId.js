const PG = require("pg");

function getProductsId(request, result1) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT p.title FROM products p WHERE p.id = $1::uuid",
    [request.params.myParam],
    function(error, result2) {
      if (error) {
        console.warn(error);
      } else {
        result1.json(result2.rows);
      }
    }
  );
}

module.exports = getProductsId;
