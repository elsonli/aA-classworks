const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Function.prototype.myDebounce = function(timeout) {
  let timeoutComplete = false;
  let initialInterval = setTimeout(()=>{
    this(arguments);
    timeoutComplete = true;
  }, timeout);

  reader.question(`Type something!!:`, function() {
    return () => {
      if (!timeoutComplete) {
        clearTimeout(initialInterval);
      }
      this.myDebounce(timeout);
    };
  });
};
    
class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();

neuron.fire = neuron.fire.myDebounce(3000);

interval = setInterval(() => {
  neuron.fire();
}, 6000);

// interval = 500 ms
// wait 250 ms => user clicks => wait is reset to 0 ms