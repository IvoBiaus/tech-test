const expect = require('chai').expect;
const MegaCoverage = require('../src/megaCoverage');

describe("Mega coverage product", function() {

  it("should be created with -Mega Coverage- name", function() {
    const newProduct = new MegaCoverage(5, 10);
    expect(newProduct.name).equal("Mega Coverage");
  });

  it("should always have price 80", function() {
    const newProduct = new MegaCoverage(5, 10);
    expect(newProduct.price).equal(80);
  });

  it("should always have sellIn 0", function() {
    const newProduct = new MegaCoverage(5, 10);
    expect(newProduct.sellIn).equal(0);
  });

  it("should no change price when price is updated", function() {
    const newProduct = new MegaCoverage(5, 10);
    newProduct.updatePrice();
    expect(newProduct.price).equal(80);
  });

  it("should not change sellIn when price is updated", function() {
    const newProduct = new MegaCoverage(5, 10);
    newProduct.updatePrice();
    expect(newProduct.sellIn).equal(0);
  });

});

describe("Mega coverage expired product", function() {

  it("should not be posible to be expired", function() {
    const newProduct = new MegaCoverage(-1, 10);
    expect(newProduct.sellIn).equal(0);
  });

  it("should be created with -Mega Coverage- name", function() {
    const newProduct = new MegaCoverage(-1, 10);
    expect(newProduct.name).equal("Mega Coverage");
  });

  it("should always have price 80", function() {
    const newProduct = new MegaCoverage(-1, 10);
    expect(newProduct.price).equal(80);
  });

});
