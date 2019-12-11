/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst COLOR = \"green\";\nconst RADIUS = 10;\nUtils.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(posObj) {\n  MovingObject.call(this, {\n    color: COLOR,\n    radius: RADIUS,\n    pos: posObj.pos,\n    vel: Utils.randomVec(4),\n    game: posObj.game\n  });\n}\nAsteroid.prototype.collideWith = function(otherObj) {\n  if(otherObj instanceof Ship) {\n    Ship.prototype.relocate();\n  }\n}\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_ASTEROIDS = 8;\n\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({pos: this.randomPosition()});\n}\n\nGame.prototype.addAsteroids = function() {\n  let count = 0;\n  while (count < NUM_ASTEROIDS) {\n    let asteroid = new Asteroid({\n      pos: this.randomPosition(),\n      game: this\n    });\n    this.asteroids.push(asteroid);\n    count++;\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  const x = Math.random() * DIM_X;\n  const y = Math.random() * DIM_Y;\n  return [x, y];\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0,0,DIM_X,DIM_Y);\n  let allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    allObjects[i].draw(ctx); \n  }\n};\n\nGame.prototype.moveObjects = function() {\n  let allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    allObjects[i].move();\n  }\n};\n\nGame.prototype.wrap = function(pos) {\n  return [(DIM_X + pos[0]) % DIM_X, (DIM_Y + pos[1]) % DIM_Y];\n};\n\nGame.prototype.checkCollisions = function() {\n  let allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    let asteroid1 = allObjects[i];\n    for (let j = 0; j < allObjects.length; j++) {\n      let asteroid2 = allObjects[j];\n      if (i !== j) {\n        if (asteroid1.isCollidedWith(asteroid2)) {\n          asteroid1.collideWith(asteroid2);\n        }\n      }\n    }\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid) {\n  let index = this.asteroids.indexOf(asteroid);\n  this.asteroids.splice(index,1);\n};\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat([this.ship]);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game(); \n  this.ctx = ctx;\n}\nGameView.prototype.start = function(ctx) {\n  let that = this;\n  setInterval(function(){\n    that.game.step();\n    that.game.draw(ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx; // Set window ctx here because ctx is block scoped\n  const gameView = new GameView(ctx);\n  gameView.start(ctx);\n});\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  let wrappedPos = this.game.wrap(this.pos);\n  this.pos[0] = wrappedPos[0];\n  this.pos[1] = wrappedPos[1];\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let cp1 = this.pos;\n  let cp2 = otherObject.pos;\n  let sumRadii = this.radius + otherObject.radius;\n  let distance = Math.sqrt(Math.pow((cp1[0] - cp2[0]), 2) + Math.pow((cp1[1] - cp2[1]), 2));\n  return (distance < sumRadii) ? true : false;\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(this);\n  // this.game.remove(otherObject);\n};\n\nmodule.exports = MovingObject; \n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst RADIUS = 10;\nconst COLOR = \"black\";\n\nUtils.inherits(Ship, MovingObject);\n\nfunction Ship(posObj) {\n  MovingObject.call(this, {\n    color: COLOR,\n    radius: RADIUS,\n    pos: posObj.pos,\n    vel: [0,0],\n    game: posObj.game\n  });\n}\n\nShip.prototype.move = function() {}\n\nShip.prototype.relocate = function() {\n  this.pos = Game.randomPosition();\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Utils = {\n  inherits(Child, Parent) {\n    // 1. Set the Surrogate's prototype to be the Parent class's prototype\n    function Surrogate() {}\n    Surrogate.prototype = Parent.prototype;\n\n    // 2. Create an instance of the Surrogate\n    // 3. Set the Child's prototype to be the Surrogate instance\n    Child.prototype = new Surrogate();\n\n    // 4. Set the Child's prototype's constructor to be the Child class\n    Child.prototype.constructor = Child;\n  },\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Utils.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });