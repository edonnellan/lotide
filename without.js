const without = function (sourceArray, itemsToRemove) {
  let outputArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (itemsToRemove.includes(sourceArray[i])) {
      continue;
    } else {
      outputArray.push(sourceArray[i]);
    }
  }
  return outputArray;
};

const assertArraysEqual = function (arr1, arr2) {
  let answer = eqArrays(arr1, arr2);

  if (answer === true) {
    console.log("The arrays are a perfect match!");
  } else {
    //false
    console.log("Boo, the arrays are not a match!");
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

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1, 3]), [2]);
assertArraysEqual(without([7, 5, 9], [2]), [7, 9]);
assertArraysEqual(without([6, 6, 8], [8]), [6, 6]);
assertArraysEqual(without([3, 4, 1], [5]), [3, 4]);
assertArraysEqual(without([1, 1, 1], [1]), []);




/*
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === arr2[i]) {
    indexToRemove.push(i);
    console.log("indexToRemove: ", indexToRemove);
  }
}
*/
