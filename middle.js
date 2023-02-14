const middle = function(array) {
  let outputArray = [];
  let odd = 0;
  let even = 0;

  if (array.length <= 2) { // 2 or less elements returns empty array
    return [];
  };

  if (array.length % 2 !== 0) { // odd number of elements in array
    odd = (array.length - 1) / 2;
    outputArray.push(array[odd]);
  };

  if (array.length % 2 === 0) { // even number of elements in array
    even = (array.length / 2) - 1;
    outputArray.push(array[even], array[even + 1]);
  };

  return outputArray;
};


module.exports = middle;
