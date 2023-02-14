# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @edonnellan/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns the first element of an array.
* `tail(...)`: Returns an array with the first element removed.
* `middle(...)`: Returns the middle element of an array.
* `without(...)`: Removes a specifed element value from an array.
* `takeUntil(...)`: Returns the provided array until a certain value is hit.
* `map(...)`: Creates a new array from an input array by implementing a callback function on each element before pushing to the new array.
* `letterPositions(...)`: Returns an object with each letter from a sting input as the keys and the recurrance in the string as the value to that key.
* `findKeyByValue(...)`: Find the key of an object by using the value of that key.
* `findKey(...)`: Find object key using the object and callback function as arguments.
* `countOnly(...)`: Creates and object to keep count of the recurrance of a each string in an array.
* `countLetters(...)`: Creates and object to keep count of the recurrance of each letter from a string input.