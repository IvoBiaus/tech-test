const fs = require('fs');
const CarInsurance = require("./carInsurance");
const Product = require("./products/product");
const FullCoverage = require("./products/fullCoverage");
const SpecialFullCoverage = require("./products/specialFullCoverage");
const MegaCoverage = require("./products/megaCoverage");
const SuperSale = require("./products/superSale");

const FILE_PATH = "result.txt";

fs.unlink(FILE_PATH, (err) => {
  if (err) {
    console.error(err)
    return
  }
});

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

var stream = fs.createWriteStream(FILE_PATH, {flags:'a'});
stream.write("*For MegaCoverage SellIn and Price will always be 0 and 80 respectively\n\n");

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  const dataLine = `${product.name}, ${product.sellIn}, ${product.price}\n`;
  stream.write(dataLine);
};

for (let i = 1; i <= 30; i += 1) {
  stream.write(`Day ${i}\n`);
  stream.write('name, sellIn, price\n');
  carInsurance.updatePrice().forEach(productPrinter);
  stream.write("\n");
}

stream.end();
