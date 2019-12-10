function sum1(...arg) {
  let sum = 0;
  for (const num of arg) {
    sum += num;
  }
  return sum;
}

console.log(sum1(1, 2, 3, 4) === 10);
console.log(sum1(1, 2, 3, 4, 5) === 15);

function sum2() {
  let sum = 0;
  for (const num of Array.from(arguments)) {
    sum += num;
  }
  return sum;
}

console.log(sum2(1, 2, 3, 4) === 10);
console.log(sum2(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind1 = function(context) {
  let bindArgs = Array.prototype.slice.call(arguments, 1);
  let that = this;
  return function() {
    let calltimeArgs = Array.prototype.slice.call(arguments);
    that.apply(context, bindArgs.concat(calltimeArgs));
  };
};

Function.prototype.myBind2 = function(context, ...bindArgs) {
  let that = this;
  return function(...calltimeArgs) {
    that.apply(context, bindArgs.concat(calltimeArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind1(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind1(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind1(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays1 = markov.says.myBind1(pavlov);
notMarkovSays1("meow", "me");
// Pavlov says meow to me!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind2(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind2(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays2 = markov.says.myBind2(pavlov);
notMarkovSays2("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum1(numArgs) {
  let nums = [];
  function _curriedSum(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return sum2(...nums);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const sum = curriedSum1(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry1 = function(numArgs) {
  let that = this;
  let nums = [];
  function _curriedSum1(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return that(...nums);
    } else {
      return _curriedSum1;
    }
  }
  return _curriedSum1;
};

Function.prototype.curry2 = function (numArgs) {
  let that = this;
  let nums = [];
  function _curriedSum2(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      return that.apply(that, nums);
    } else {
      return _curriedSum2;
    }
  }
  return _curriedSum2;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry1(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);

// or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30