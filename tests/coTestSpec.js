const expect = require('chai').expect;
const Product = require('../src/product');
const CarInsurance = require('../src/carInsurance');

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("foo");
  });

});
