const assertEqual = function(actual,expected) {

  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }  
  }
  //else return undefined
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Last of Us"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;