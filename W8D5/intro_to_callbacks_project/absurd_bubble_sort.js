const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} greater than ${el2}?`, function (answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(3, 1, bool => console.log(bool));

function innerBubbleSortLoop(arr, i, outerBubbleSortLoop, booleanArr) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(booleanArr.includes(true));
  } else {
    const [el1, el2] = [arr[i], arr[i + 1]];
    let swap;
    askIfGreaterThan(el1, el2, function (userBool) {
      swap = userBool;

      if (swap) {
        [arr[i + 1], arr[i]] = [el1, el2];
        booleanArr.push(true);
      } else {
        booleanArr.push(false);
      }
      console.log(booleanArr);
      innerBubbleSortLoop(arr, ++i, outerBubbleSortLoop, booleanArr);
    });
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(bool) {
    if (bool) {
      innerBubbleSortLoop(arr, 0, outerBubbleSortLoop, []);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});