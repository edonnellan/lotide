const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return 70 if passed [70, 100, 56, 44]", () => {
    assert.strictEqual(head([70, 100, 56, 44]), 70);
  });

  it("should return undefined if passed an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("should return 44 when passed [44]", () => {
    assert.strictEqual(head([44]), 44);
  });

  it("should return Hello when passed [Hello, Lighthouse Labs, Bootcamp]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse Labs", "Bootcamp"]), "Hello");
  });

  it("should return Hiya when passed [Hiya, The, year, is, 2023]", () => {
    assert.strictEqual(head(["Hiya", "The", "year", "is", 2023]), "Hiya");
  });

});