const assertEqual = function(actual,expected) {

  for (let key in actual) {
    if (actual[key] === expected[key]) {
        console.log(`💚💚💚 Assertion Passed: ${actual}  === ${expected}`);
      } else {
        console.log(`💔💔💔 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

const countLetters = function(sentence) {
  //takes in a string
  let outputObject = {};

  //loop through string and add each letter to the object. initialise it and then count from there
  for (let letter of sentence) {
    //if space then skip it
    if (letter === " ") {
      continue;
    } else if (outputObject[letter]) {
      outputObject[letter] += 1;
    } else {
      outputObject[letter] = 1;
    }
  }
  console.log("outputObj: ", outputObject);
  return outputObject;
  //returns object w/ count of each letter in the string. only include letters used in string
};

// const result2 = countLetters("lighthouse in the house");

assertEqual(countLetters("hello there"), { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 });
assertEqual(countLetters("what is going on"), { w: 1, h: 1, a: 1, t: 1, i: 2, s: 1, g: 2, o: 2, n: 2 });
assertEqual(countLetters("i am learning to code"), {
  i: 2,
  a: 2,
  m: 1,
  l: 1,
  e: 2,
  r: 1,
  n: 2,
  g: 1,
  t: 1,
  o: 2,
  c: 1,
  d: 1
});
assertEqual(countLetters("how are you"), { h: 1, o: 2, w: 1, a: 1, r: 1, e: 1, y: 1, u: 1 });


