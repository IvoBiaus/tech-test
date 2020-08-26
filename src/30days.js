const CarInsurance = require("./carInsurance");
const Product = require("./products/product");
const FullCoverage = require("./products/fullCoverage");
const SpecialFullCoverage = require("./products/specialFullCoverage");
const MegaCoverage = require("./products/megaCoverage");
const SuperSale = require("./products/superSale");

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new FullCoverage(2, 0),
  new Product('Low Coverage', 5, 7),
  new MegaCoverage(0, 80),
  new MegaCoverage(-1, 80),
  new SpecialFullCoverage(15, 20),
  new SpecialFullCoverage(10, 49),
  new SpecialFullCoverage(5, 49),
  new SuperSale(3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}