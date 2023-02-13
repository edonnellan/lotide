const head = require("../head");
const assertEqual = require("../assertEqual");

//TEST CODE
assertEqual(head(["Hello", "Lighthouse Labs", "Bootcamp"]), "Hello");
assertEqual(head([70, 100, 56, 44]), 70);
assertEqual(head([44]), 44);
assertEqual(head([]), undefined);