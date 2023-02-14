// const tail = require("../tail");

// const assertEqual = function(actual,expected) {

//   if (actual === expected) {
//     console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// //TEST CODE
// assertEqual(tail(["Lighthouse Labs", "Bootcamp"]), "Bootcamp");
// assertEqual(tail(["hello", "hello"]), "hello");
// assertEqual(tail(["Mother", "Father"]), "Father");
// assertEqual(tail([23, 40]), 40);
// assertEqual(tail([1, 1]), 1);

const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {

  it("should return Bootcamp when [Lighthouse, Labs, Bootcamp] is passed", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs", "Bootcamp"]), ["Labs", "Bootcamp"]);
  });

  it("should return hello when [hello, cya]", () => {
    assert.deepEqual(tail(["hello", "cya"]), ["cya"]);
  });

  it("should return 23 when passed [Mother, Father, true, 23]", () => {
    assert.deepEqual(tail(["Mother", "Father", "true", 23]), ["Father", "true", 23]);
  });

  it("should return -45 when passed [30, hello, yes, 1290, -45]", () => {
    assert.deepEqual(tail([30, "hello", "yes", "1290", -45]), ["hello", "yes", "1290", -45]);
  });

  it("should return an empty array when passed [1, 1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("should return and empty array when passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});