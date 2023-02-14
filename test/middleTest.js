const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
// const assertEqual = require("../assertEqual");


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 3, 5]), [3]);