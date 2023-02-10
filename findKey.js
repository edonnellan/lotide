const assertEqual = function(actual,expected) {

  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKey = (obj, callback) => {
  //loop and return first key with a truthy value
  for (let key in obj) {
    // console.log("key: ", key);
    if (callback(obj[key]) === true) {
      // console.log("callback(key): ", callback(obj[key]));
      return key;
    }
  }
  return undefined;
};


const movies = {
  romCom: "Easy A",
  comedy: "Pineapple Express",
  drama: "All Quiet on the Western Front",
  thriller: "Gone Girl"
};

const watchARomCom = findKey(movies, x => x === "Easy A");
const watchAComedy = findKey(movies, x => x === "Pineapple Express");
const watchADrama = findKey(movies, x => x === "All Quiet on the Western Front");
const watchAThriller = findKey(movies, x => x === "Gone Girl");


// //TEST CODE
assertEqual(watchARomCom, "romCom");
assertEqual(watchAComedy, "comedy");
assertEqual(watchADrama, "drama");
assertEqual(watchAThriller, "thriller");

