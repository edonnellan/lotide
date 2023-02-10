const assertArraysEqual = function (arr1, arr2) {
  let answer = eqArrays(arr1, arr2);

  if (answer === true) {
    console.log(`💚💚💚 Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    //false
    console.log(`💔💔💔 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
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

//outputs console log the appropriate message

assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([6, 8], [1, 3, 4]);
assertArraysEqual([6, 6, 8], [1, 4]);
assertArraysEqual([9, 9, 8], [2, 6, 6]);
assertArraysEqual([6, 4, 4], [6, 4, 4]);
