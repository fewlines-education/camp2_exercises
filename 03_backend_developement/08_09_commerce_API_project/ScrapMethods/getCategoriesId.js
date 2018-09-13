const PG = require("pg");

function getCategoriesId(request, result1) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT c.label FROM categories c WHERE c.id = $1::uuid",
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

module.exports = getCategoriesId;
