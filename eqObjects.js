const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1Arr = Object.keys(object1);
  let obj2Arr = Object.keys(object2);

  if (obj1Arr.length !== obj2Arr.length) {
    return false;
  }

  for (let key of obj1Arr) {
    console.log("key: ", key);
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      console.log("key2: ", key);
      return false;
    }
  }
  return true;
};

// const pantsObject = { color: "orange", size: "small" };
// const diffPantsObject= { size: "small", color: "orange" };
// // console.log(eqObjects(pantsObject , diffPantsObject));
// assertEqual(eqObjects(pantsObject , diffPantsObject), true); // => true

// const longPantsObject= { size: "medium", color: "red", sleeveLength: "long" };
// // console.log(eqObjects(pantsObject , longPantsObject));
// assertEqual(eqObjects(pantsObject , longPantsObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
); // => false
