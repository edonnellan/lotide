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



const takeUntil = function(array, callback) {
  //slice the array from the beginning
  //stop once sees a truthy value and returns
  //callback will only take in array ITEM
  let newArray = [];
  for (let item of array) {
    // console.log("item :", item);
    if (callback(item) === false) {
      newArray.push(item);
    } else {
      return newArray;
    }
    // console.log("item AFTER: ", callback(item));
    // console.log("array :", array);
  }
  // console.log("newArray: ", newArray);
};


//TESTING 

const VanWinterTemps = [1, 12, -5, 17, 22, -11, 2, -15, -1];
const results1 = takeUntil(VanWinterTemps, (i) => i > 20);
// console.log(results1);

// console.log('---');

const travelDestinations = ["Tanzania'", "Scotland", "France", "Canada", "Ireland", "Iceland", "Mexico"];
const results2 = takeUntil(travelDestinations, (i) => i === 'Ireland');
// console.log(results2);


assertArraysEqual(results1, [ 1, 12, -5, 17 ]);
assertArraysEqual(results2, [ "Tanzania'", 'Scotland', 'France', 'Canada' ]);