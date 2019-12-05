const range = (start, end) => {
  if (start === end) {
    return [start];
  } else if (start > end) {
    return [start].concat(range(start - 1, end));
  } else {
    return [start].concat(range(start + 1, end));
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

// const exponent_1 = (base, exp) => {
//   if( exp === 0 ) {
//     return 1;
//   } else {
//     return base * exponent(base, exp - 1);
//   }
// };

const exponent_2 = (base, exp) => {
  if (exp === 0) {
    return 1;
  } else {
    if (exp % 2 === 0) {
      return Math.pow(exponent(base, exp / 2), 2);
    } else {
      return base * Math.pow(exponent(base, (exp - 1) / 2), 2);
    }
  }
};

// console.log(exponent_1(2, 7));
// console.log(exponent_2(2, 7));

const fibonacci = (n) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
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

// console.log(deepDup([5, 1, [[7]], 2]));