const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([6, 8], [6, 8]);
assertArraysEqual([6, 6, 8], [6, 6, 8]);
assertArraysEqual([9, 9, 8], [9, 9, 8]);
assertArraysEqual([6, 4, 4], [6, 4, 4]);