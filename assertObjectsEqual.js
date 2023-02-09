const eqObjects = function(object1, object2) {
  let obj1Arr = Object.keys(object1);
  let obj2Arr = Object.keys(object2);

  if (obj1Arr.length !== obj2Arr.length) {
    return false;
  }
  for (let key of obj1Arr) {
    // console.log("key: ", key);
    if (Array.isArray(object1[key])) {
      return false;
    } else if (object1[key] !== object2[key]) {
      // console.log("key2: ", key);
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;

  let actualAnswer = eqObjects(object1, object2);

  if (actualAnswer === true) {
    console.log(`💚💚💚 Assertion Passed: ${inspect(object1)}  === ${inspect(object2)}`);
  } else {
    //false
    console.log(`💔💔💔 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({a: 1, b: 3, c: 4}, {a: 1, b: 3, c: 4});
assertObjectsEqual({a: 6, b: 8}, {a: 1, b: 3, c: 4});
assertObjectsEqual({a: 6, b: 4}, {a: 6, b: 4});
assertObjectsEqual({a: 9, b: 9, c: 8}, {a: 2, b: 6, c: 6});
assertObjectsEqual({a: 6, b: 4, c: 4}, {a: 6, b: 4, c: 4});
