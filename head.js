const assertEqual = function(actual,expected) {

  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("hello", "hello"));
console.log(assertEqual("Mother", "Father"));
console.log(assertEqual(23, 40));
console.log(assertEqual(1, 1));

const head = function(arr) {
  return arr[0];
};

console.log(head(["Hello", "Lighthouse Labs", "Bootcamp"]));
console.log(head([70, 100, 56, 44]));
console.log(head([44]));
console.log(head([]));