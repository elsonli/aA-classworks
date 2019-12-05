Array.prototype.myEach = function (callback) {
  for (let ele of this) {
    console.log(callback(ele));
  }
};

let callback = function (ele) {
  return ele * 2;
};

// console.log([1, 2, 3, 4].myEach(callback));
// console.log([1, 2, 3, 4], (ele) => ele * 2);

Array.prototype.myMap = function (callback) {
  let res = [];
  for (let ele of this) {
    res.push(callback(ele));
  }
  return res;
};

// console.log([1, 2, 3, 4].myMap(callback));

Array.prototype.myReduce = function (callback, initialValue) {

  if (initialValue) {
    let acc = initialValue;
    myFunc = (x) => {
      for (let i = x; i < this.length; i++) {
        acc = callback(acc, this[i]);
        console.log(acc);
      }
      myFunc.whatever = acc;
    };
    myFunc(0);
  } else {
    let acc = this[0];
    myFunc = (x) => {
      for (let i = x; i < this.length; i++) {
        acc = callback(acc, this[i]);
        console.log(acc);
      }
      myFunc.whatever = acc;
    };
    myFunc(1);
  }
};

// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25);

// console.log(myFunc.whatever);