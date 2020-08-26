const expect = require('chai').expect;
const SuperSale = require('../src/superSale');

describe("Super sale product", function() {

  it("should be created with -Super Sale- name", function() {
    const newProduct = new SuperSale(5, 10);
    expect(newProduct.name).equal("Super Sale");
  });

  it("should not have changes when created", function() {
    const newProduct = new SuperSale(5, 10);
    expect(newProduct.name).equal("Super Sale");
    expect(newProduct.sellIn).equal(5);
    expect(newProduct.price).equal(10);
  });

  it("should decrease price by 2 when price is updated", function() {
    const newProduct = new SuperSale(5, 10);
    newProduct.updatePrice();
    expect(newProduct.price).equal(8);
  });

  it("should decrease sellIn by 1 when price is updated", function() {
    const newProduct = new SuperSale(5, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(4);
  });

  it("have minimum price of 0", function() {
    const newProduct = new SuperSale(2, 1);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(0);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(0);
  });

});

describe("Super sale expired product", function() {

  it("should be created with -Super Sale- name", function() {
    const newProduct = new SuperSale(-1, 10);
    expect(newProduct.name).equal("Super Sale");
  });

  it("should not have changes when created", function() {
    const newProduct = new SuperSale(-1, 10);
    expect(newProduct.name).equal("Super Sale");
    expect(newProduct.sellIn).equal(-1);
    expect(newProduct.price).equal(10);
  });

  it("should decrease price by 4 when price is updated", function() {
    const newProduct = new SuperSale(-1, 10);
    newProduct.updatePrice();
    expect(newProduct.price).equal(6);
  });

  it("should decrease sellIn by 1 when price is updated", function() {
    const newProduct = new SuperSale(-1, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(-2);
  });

  it("have minimum price of 0", function() {
    const newProduct = new SuperSale(-1, 3);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(0);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(0);
  });

});
