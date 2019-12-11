const Utils = {
  inherits(Child, Parent) {
    // 1. Set the Surrogate's prototype to be the Parent class's prototype
    function Surrogate() {}
    Surrogate.prototype = Parent.prototype;

    // 2. Create an instance of the Surrogate
    // 3. Set the Child's prototype to be the Surrogate instance
    Child.prototype = new Surrogate();

    // 4. Set the Child's prototype's constructor to be the Child class
    Child.prototype.constructor = Child;
  },
  // Return a randomly oriented vector with the given length.
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Utils.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Utils;