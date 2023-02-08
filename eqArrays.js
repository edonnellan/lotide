const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    }
  }
};

const assertEqual = function(actual,expected) {

  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should PASS
assertEqual(eqArrays(["hi", "there"], ["hi", "there"]), false); // => should PASS
assertEqual(eqArrays([1, 2, 1], [1, 2, 1]), true); // => should PASS