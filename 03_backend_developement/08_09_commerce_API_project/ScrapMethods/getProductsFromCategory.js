const PG = require("pg");

function getProductsFromCategory(request, result1) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT p.id, p.decathlon_id, c.products_title, p.description, p.brand_id, p.min_price, p.max_price, p.crossed_price, p.percent_reduction, p.image_path, p.rating FROM categories_products c INNER JOIN products p ON (c.products_title = p.title) WHERE c.categories_decathlon_id = $1::uuid",
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

module.exports = getProductsFromCategory;
