const Product = require("./product");

class MegaCoverage extends Product {
  constructor() {
    super("Mega Coverage", 0, 80);
  }

  updatePrice(){}
}

module.exports = MegaCoverage;
