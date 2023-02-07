/*
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
*/
const tail = function(arr) {
  let newArray = [];

  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  } console.log("newArray", newArray);
  return newArray;
};

console.log(tail(["Hello", "Lighthouse Labs", "Bootcamp"]));
console.log(tail([70, 100, 56, 44]));
console.log(tail([44]));
console.log(tail([]));