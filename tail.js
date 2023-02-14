const tail = function(arr) {
  let newArray = [];

  if(arr.length === 0 || arr.length === 1) {
    return [];
  }

  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

module.exports = tail;