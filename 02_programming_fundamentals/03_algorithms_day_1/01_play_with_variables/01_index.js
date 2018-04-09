// a constant called `hello`, bound to a string: "Sparta";
const hello = "Sparta";
// a constant called `currentYear`, bound to an integer: 2017;
const currentYear = 2017;
// a constant called `foo`, bound to an integer: 12;
const foo = 12;
// a constant called `bar`, bound to an integer: 28;
const bar = 28;
// a constant called `sumResult`, bound to the sum of `foo` and `bar`;
const sumResult = foo + bar;
//console.log("sumResult: " + sumResult);
// a constant called `prodResult`, bound to the product of `bar` and `foo`.
const prodResult = bar * foo;
//console.log("prodResult: " + prodResult);
// a constant called `promo`, bound to an object with a field `year`, with the value of `currentYear` and with the field `kind`, with the value of `hello`;
const promo = {
  year : currentYear,
  kind : hello
};
//console.log("promo.year: " + promo.year);
// a constant called `promoYear`, bound to the value of the field `year` of the object `promo`;
const promoYear = promo.year;
console.log("promoYear: " + promoYear);
// a constant called `digits`, bound to an array from zero to nine.
let digits = [];
for(let i=0; i<10; i++){
  let d = i;
  digits[i] = i;
}
//console.log(digits);
