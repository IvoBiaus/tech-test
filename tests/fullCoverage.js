const expect = require('chai').expect;
const FullCoverage = require('../src/fullCoverage');

describe("Full coverage product", function() {

  it("should be created with -Full Coverage- name", function() {
    const newProduct = new FullCoverage(5, 10);
    expect(newProduct.name).equal("Full Coverage");
  });

  it("should not have changes when created", function() {
    const newProduct = new FullCoverage(5, 10);
    expect(newProduct.name).equal("Full Coverage");
    expect(newProduct.sellIn).equal(5);
    expect(newProduct.price).equal(10);
  });

  it("should increase price by 1 when price is updated", function() {
    const newProduct = new FullCoverage(5, 10);
    newProduct.updatePrice();
    expect(newProduct.price).equal(11);
  });

  it("should decrease sellIn by 1 when price is updated", function() {
    const newProduct = new FullCoverage(5, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(4);
  });

  it("have maximum price of 50", function() {
    const newProduct = new FullCoverage(2, 50);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(50);
  });

});

describe("Full coverage expired product", function() {

  it("should be created with -Full Coverage- name", function() {
    const newProduct = new FullCoverage(-1, 10);
    expect(newProduct.name).equal("Full Coverage");
  });

  it("should not have changes when created", function() {
    const newProduct = new FullCoverage(-1, 10);
    expect(newProduct.name).equal("Full Coverage");
    expect(newProduct.sellIn).equal(-1);
    expect(newProduct.price).equal(10);
  });

  it("should increase price by 2 when price is updated", function() {
    const newProduct = new FullCoverage(-1, 10);
    newProduct.updatePrice();
    expect(newProduct.price).equal(12);
  });

  it("should decrease sellIn by 1 when price is updated", function() {
    const newProduct = new FullCoverage(-1, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(-2);
  });

  it("have maximum price of 50", function() {
    const newProduct = new FullCoverage(-1, 49);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(50);
  });

});
