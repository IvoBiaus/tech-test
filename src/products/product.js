class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice(){
    this.setPrice(this.price + this.getFluctuation());
    this.sellIn --;
  }

  hasExpired(){
    return this.sellIn <= 0; 
  }

  getFluctuation(){
    return this.hasExpired() ? -2 : -1;
  }

  setPrice(price) {
    this.price = Math.min(Math.max(0, price), 50);
  }

}

module.exports = Product;
