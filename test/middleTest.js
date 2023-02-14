const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  
  it("should return an empty array if passed [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return an empty array if passed [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return [2] if passed [1, 2, 3]", () =>  {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [4,5] if passed [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
  
  it("should return [678, 7007] if passed [433, 534, 678, 7007, 80,  965]", () => {
    assert.deepEqual(middle([433, 534, 678, 7007, 80,  965]), [678, 7007]);
  });

});