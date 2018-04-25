const fetch = require("node-fetch");

fetch(
  "https://decath-product-api.herokuapp.com/products"
)
  .then((response) => response.json())
  .then((result) => {
    return result.map(getWantedCell);
  })
  .then((result) => {
    result.map(selectCell);
  });

function getWantedCell(cell){
  if(cell.id === "efe288cb-fb63-4b23-b8df-529f04b8b02b"){
    console.log("cell : ",cell);
    return cell;
  }
}

function selectCell(cell){
  if(cell !== undefined){
    console.log(cell.title);
  }
}
