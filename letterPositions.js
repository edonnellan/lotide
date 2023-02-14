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

const letterPositions = function(sentence) {
  let outputObject = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    //if space then skip it
    if (letter === " ") {
      continue;
      //if letter key already exists as a key then push letter index to value array
    } else if (outputObject[letter]) {
      outputObject[letter].push(i);
    } else {//if letter doesn't exist as a key then create new array & push letter index to array
      outputObject[letter] = [];
      outputObject[letter].push(i);
    }
  }
  return outputObject;
};

// assertArraysEqual(letterPositions("hello").h, { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }.h);
// assertArraysEqual(letterPositions("hello").e, { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }.e);
// assertArraysEqual(letterPositions("hello").l, { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }.l);
// assertArraysEqual(letterPositions("hello").o, { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }.o);

module.exports = letterPositions;


