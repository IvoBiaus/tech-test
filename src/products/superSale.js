const Product = require("./product");

class SuperSale extends Product {
  constructor(sellIn, price) {
    super("Super Sale", sellIn, price);
  }

  getFluctuation(){
    return super.getFluctuation()*2;
  }

}

module.exports = SuperSale;
