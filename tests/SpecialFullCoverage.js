const expect = require('chai').expect;
const SpecialFullCoverage = require('../src/products/specialFullCoverage');

describe("Special full coverage product", function() {

  it("should be created with -Special Full Coverage- name", function() {
    const newProduct = new SpecialFullCoverage(5, 10);
    expect(newProduct.name).equal("Special Full Coverage");
  });

  it("should not have changes when created", function() {
    const newProduct = new SpecialFullCoverage(5, 10);
    expect(newProduct.name).equal("Special Full Coverage");
    expect(newProduct.sellIn).equal(5);
    expect(newProduct.price).equal(10);
  });

  it("should increase price by 1 when price is updated and sellIn is bigger than 10", function() {
    const newProduct = new SpecialFullCoverage(12, 20);
    newProduct.updatePrice();
    expect(newProduct.price).equal(21);
    newProduct.updatePrice();
    expect(newProduct.price).equal(22);
  });

  it("should increase price by 2 when price is updated and sellIn is equal or lower than 10", function() {
    const newProduct = new SpecialFullCoverage(10, 20);
    newProduct.updatePrice();
    expect(newProduct.price).equal(22);
    newProduct.updatePrice();
    expect(newProduct.price).equal(24);
  });

  it("should increase price by 3 when price is updated and sellIn is equal or lower than 5", function() {
    const newProduct = new SpecialFullCoverage(5, 20);
    newProduct.updatePrice();
    expect(newProduct.price).equal(23);
    newProduct.updatePrice();
    expect(newProduct.price).equal(26);
  });

  it("should drop price to 0 when sellIn equal or lower than 0", function() {
    const newProduct = new SpecialFullCoverage(1, 20);
    newProduct.updatePrice();
    expect(newProduct.price).equal(23);
    newProduct.updatePrice();
    expect(newProduct.price).equal(0);
    newProduct.updatePrice();
    expect(newProduct.price).equal(0);
  });

  it("should decrease sellIn by 1 when price is updated", function() {
    const newProduct = new SpecialFullCoverage(5, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(4);
  });

  it("have maximum price of 50 when raising price by 1", function() {
    const newProduct = new SpecialFullCoverage(15, 49);
    newProduct.updatePrice();
    expect(newProduct.price).equal(50);
    newProduct.updatePrice();
    expect(newProduct.price).equal(50);
  });

  
  it("have maximum price of 50 when raising price by 2", function() {
    const newProduct = new SpecialFullCoverage(10, 49);
    newProduct.updatePrice();
    expect(newProduct.price).equal(50);
    newProduct.updatePrice();
    expect(newProduct.price).equal(50);
  });

  it("have maximum price of 50 when raising price by 3", function() {
    const newProduct = new SpecialFullCoverage(5, 49);
    newProduct.updatePrice();
    expect(newProduct.price).equal(50);
    newProduct.updatePrice();
    expect(newProduct.price).equal(50);
  });

});
