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
  let outputObject = {};

  for (let letter of sentence) {
    if (letter === " ") {
      continue;
    } else if (outputObject[letter]) {
      outputObject[letter] += 1;
    } else {
      outputObject[letter] = 1;
    }
  }
  return outputObject;
};

// assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }); 
// assertEqual(countLetters("hello there"), { h: 2, e: 3, l: 2, o: 1, t: 1, r: 1 });
// assertEqual(countLetters("what is going on"), { w: 1, h: 1, a: 1, t: 1, i: 2, s: 1, g: 2, o: 2, n: 2 });
// assertEqual(countLetters("i am learning to code"), {
//   i: 2,
//   a: 2,
//   m: 1,
//   l: 1,
//   e: 2,
//   r: 1,
//   n: 2,
//   g: 1,
//   t: 1,
//   o: 2,
//   c: 1,
//   d: 1
// });
// assertEqual(countLetters("how are you"), { h: 1, o: 2, w: 1, a: 1, r: 1, e: 1, y: 1, u: 1 });

module.exports = countLetters;

