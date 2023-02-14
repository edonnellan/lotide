const tail = require("../tail");

const assertEqual = function(actual,expected) {

  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST CODE
assertEqual(tail(["Lighthouse Labs", "Bootcamp"]), "Bootcamp");
assertEqual(tail(["hello", "hello"]), "hello");
assertEqual(tail(["Mother", "Father"]), "Father");
assertEqual(tail([23, 40]), 40);
assertEqual(tail([1, 1]), 1);
