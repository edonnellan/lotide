const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([3], [3]), true); // => should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should PASS
assertEqual(eqArrays(["hi", "there"], ["hi", "there"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 1], [1, 2, 1]), true); // => should PASS