const Product = require("./product");

class FullCoverage extends Product {
  constructor(sellIn, price) {
    super("Full Coverage", sellIn, price);
  }

  getFluctuation(){
    return -super.getFluctuation();
  }

}

module.exports = FullCoverage;
