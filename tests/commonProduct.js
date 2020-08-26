const expect = require('chai').expect;
const Product = require('../src/products/product');

describe("Common product", function() {

  it("should not have changes when created", function() {
    const newProduct = new Product("Low Coverage", 5, 10);
    expect(newProduct.name).equal("Low Coverage");
    expect(newProduct.sellIn).equal(5);
    expect(newProduct.price).equal(10);
  });

  it("should decrease price by 1 when price is updated", function() {
    const newProduct = new Product("Low Coverage", 5, 10);
    newProduct.updatePrice();
    expect(newProduct.price).equal(9);
  });

  it("should decrease sellIn by 1 when price is updated", function() {
    const newProduct = new Product("Low Coverage", 5, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(4);
  });

  it("have minimum price of 0", function() {
    const newProduct = new Product("Low Coverage", 2, 0);
    newProduct.updatePrice();
    expect(newProduct.price).equal(0);
  });

});

describe("Common expired product", function() {

  it("should not have changes when created", function() {
    const newProduct = new Product("Low Coverage", -1, 10);
    expect(newProduct.name).equal("Low Coverage");
    expect(newProduct.sellIn).equal(-1);
    expect(newProduct.price).equal(10);
  });

  it("should decrease price by 2 when price is updated", function() {
    const newProduct = new Product("Low Coverage", -1, 10);
    newProduct.updatePrice();
    expect(newProduct.price).equal(8);
  });

  it("should decrease sellIn by 1 when price is updated", function() {
    const newProduct = new Product("Low Coverage", -1, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(-2);
  });

  it("have minimum price of 0", function() {
    const newProduct = new Product("Low Coverage", -1, 1);
    newProduct.updatePrice();
    expect(newProduct.price).equal(0);
  });

});
