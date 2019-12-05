Array.prototype.uniq = function() {
  // console.log(this);
  let unique = [];
  for (i = 0; i < this.length; i++) {
    if (!unique.includes(this[i])) {
      unique.push(this[i]);
    }
  }
  return unique;
};

// console.log([1,2,2,3,4,5,5].uniq());



Array.prototype.twoSum = function() {
    let summers = [];
    for(i=0; i < this.length; i++) {
      for (j = i; j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          summers.push([i,j]);
        }
      }
    }
    return summers;
};


Array.prototype.transpose = function() {

  // let matrix = new Array(this.length);
  let matrix = new Array(this.length).fill(0).map(() => new Array(this.length));
  // console.log(matrix);
  for(let i = 0; i < matrix.length; i++) {  
    for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = this[j][i];
    }
  }
  return matrix;
};

// console.log([[1,2],[3,4]].transpose());
// console.log(`check me out i: ${i}`);


Array.prototype.myEach = function(callback) {
  for (let ele of this) {
    console.log(callback(ele));
  }
  return 'something';
};

let callback = function(ele) {
  // console.log(ele * 2);
  return ele * 2;
};

// console.log([1, 2, 3, 4].myEach(callback));
// console.log([1, 2, 3, 4], (ele) => ele * 2);

Array.prototype.myMap = function(callback) {

  let res = [];
  for (let ele of this) {
    res.push(callback(ele));
  }
  return res;
};

// console.log([1, 2, 3, 4].myMap(callback));

// Array.prototype.myReduce = function(callback, initialValue) {
//   if (initialValue) {
//     var x = 0;
//     var acc = initialValue;
//   } else {
//     var x = 1;
//     var acc = this[0];
//   }
//   for (let i = x; i < this.length; i++) {
//     acc = callback(acc, this[i]);
//     console.log(acc)
//   }
  
// };


Array.prototype.myReduce = function(callback, initialValue) {

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

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;

    for(i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;

        sorted = false;
      } 
    }

  }
  return this;
};

// console.log([4,3,2,1].bubbleSort());

String.prototype.substrings = function() {

  let subs = [];

  for(let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      subs.push(this.slice(i,j));
    }
  }
  return subs.uniq();
};

// console.log("string".substrings());

const range = (start, end) => {
  if (start === end) {
    return [start];
  } else if (start > end) {
    return [start].concat(range(start - 1, end));
  } else {
    return [start].concat(range(start +1, end));
  }
};

// console.log(range(3, 9));

const sumRec = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumRec(arr.slice(1, arr.length));
  }
};

// console.log(sumRec([1, 2, 3, 4, 5]));

// const exponent = (base, exp) => {
//   if( exp === 0 ) {
//     return 1;
//   } else {
//     return base * exponent(base, exp - 1);
//   }
// };

const exponent = (base, exp) => {
  if( exp === 0 ) {
    return 1;
  } else {
    if (exp % 2 === 0) {
      return Math.pow(exponent(base, exp / 2), 2);
    } else {
      return base * Math.pow(exponent(base, (exp-1) / 2) , 2);
    }
  }
};


// console.log(exponent(2, 7));

const fibonacci = (n) => {
  if ( n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  } else {
    let prev = fibonacci(n - 1);
    return prev.concat(prev[prev.length - 1] + prev[prev.length - 2]);
  } 
};

// console.log(fibonacci(3));

const deepDup = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  } else {
    let res = [];
    for (let subarr of arr) {
      res.push(deepDup(subarr));
    }
    return res;
  }
};

console.log(deepDup([5, 1, [[7]], 2]));