const assertArraysEqual = function(arr1, arr2) {
  let answer = eqArrays(arr1, arr2);

  if (answer === true) {
    console.log(`💚💚💚 Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    //false
    console.log(`💔💔💔 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//////////

const words = ["ground", "control", "to", "major", "tom"];
// const counties = ["Mayo", "Galway", "Dublin", "Meath", "Limerick"];
// const drinks = ["water", "fizzy", "beer", "juice"]
// const snacks = ["popcorn", "chocolate", "crisps"]

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
// console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results1, [ 'M', 'G', 'D', 'M', 'L' ]);
// assertArraysEqual(results1, [ 'w', 'f', 'b', 'j' ]);
// assertArraysEqual(results1, [ 'p', 'c', 'c' ]);
