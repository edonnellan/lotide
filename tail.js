const tail = function(arr) {

  for (let i = 0; i < arr.length; i++) {
    if(i === arr.length - 1){
      return arr[i];
    }
  }
};

module.exports = tail;