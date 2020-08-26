const Product = require("./product");

class SpecialFullCoverage extends Product {
  constructor(sellIn, price) {
    super("Special Full Coverage", sellIn, price);
  }

  getFluctuation(){
    if(this.sellIn <= 0){
      return -this.price;
    }
    if(this.sellIn <= 5){
      return 3;
    }
    if(this.sellIn <= 10){
      return 2;
    }
    return 1;
  }

}

module.exports = SpecialFullCoverage;
