Function.prototype.myBind = function (context) {
  return () => this.apply(context);
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const myBoundTurnOn = turnOn.myBind(new Lamp());
myBoundTurnOn(); // should say "Turning on a lamp"