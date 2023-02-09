const assertEqual = function(actual,expected) {

  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
//loop object to find first key to match the val param
  for (let key in obj) {
    console.log("key: ", key);
    if (obj[key] === val) {
       //return first key to have val
       //console.log("obj[key]: ", obj[key]);
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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Last of Us"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
