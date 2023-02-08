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
  };
  return true;
};

const middle = function(array) {
  let outputArray = [];
  let odd = 0;
  let even = 0;

  if (array.length <= 2) { // 2 or less elements returns empty array
    return [];
  };

  
  if (array.length % 2 !== 0) { // odd number of elements in array
    odd = (array.length - 1) / 2;
    outputArray.push(array[odd]);
    // console.log("odd: ", odd, "outputArray: ", outputArray);
  };

  if (array.length % 2 === 0) { // even number of element in array
    even = (array.length / 2) - 1;
    outputArray.push(array[even], array[even + 1]);
  };
  return outputArray;
};


// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), [1]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
// assertArraysEqual(middle([1, 3, 5]), [4]);
