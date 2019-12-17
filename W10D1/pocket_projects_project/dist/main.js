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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import htmlGenerator from \"./warmup.js\";\nconst htmlGenerator = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    const clockElement = document.getElementById(\"clock\");\n    htmlGenerator(timeString, clockElement);\n\n    // Use console.log to print it.\n    console.log(timeString);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nlet clock = new Clock();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst liGenerator = (dogName, dogInfo) => {\n  const aTag = document.createElement(\"a\");\n  aTag.innerHTML = dogName;\n  aTag.setAttribute(\"href\", dogInfo);\n  const liTag = document.createElement(\"li\");\n  liTag.setAttribute(\"class\", \"dog-link\");\n  liTag.appendChild(aTag);\n  return liTag;\n};\n\nfunction dogLinkCreator() {\n  let dogNames = Object.keys(dogs);\n  let liArray = [];\n  for (let idx = 0; idx < dogNames.length; idx++) {\n    liArray.push(liGenerator(dogNames[idx], dogs[dogNames[idx]]));\n  }\n  return liArray;\n}\n\nfunction attachDogLinks() {\n  const dogLinks = dogLinkCreator();\n  const dogList = document.querySelector(\".drop-down-dog-list\");\n  for (let idx = 0; idx < dogLinks.length; idx++) {\n    const dogLink = dogLinks[idx];\n    dogLink.setAttribute(\"class\", \"hideClass\");\n    dogList.appendChild(dogLink);\n  }\n  handleEnter();\n  handleLeave();\n}\n\nfunction handleEnter() {\n  let dogNavH3 = document.querySelector(\"nav.drop-down-dog-nav h3\");\n  dogNavH3.addEventListener(\"mouseenter\", (e) => {\n    const dogList = document.querySelector(\".drop-down-dog-list\");\n    const dogListChildren = dogList.children;\n    for (let idx = 0; idx < dogListChildren.length; idx++) {\n      dogListChildren[idx].setAttribute(\"class\", \"\");\n    }\n  });\n}\n\nfunction handleLeave() {\n  let dogNav = document.querySelector(\"nav.drop-down-dog-nav\");\n  dogNav.addEventListener(\"mouseleave\", (e) => {\n    const dogList = document.querySelector(\".drop-down-dog-list\");\n    const dogListChildren = dogList.children;\n    for (let idx = 0; idx < dogListChildren.length; idx++) {\n      dogListChildren[idx].setAttribute(\"class\", \"hideClass\");\n    }\n  });\n}\n\nattachDogLinks();\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let todos = [];\nlet todosUl = document.querySelector('.todos');\nlet todosForm = document.querySelector('.add-todo-form');\n\nfunction ToDo() {}\n\nfunction addTodo() {\n  let inputName = document.getElementsByName(\"add-todo\")[0];\n  let newToDo = new ToDo();\n  newToDo.value = inputName.value;\n  newToDo.done = false;\n  todos.push(newToDo);\n  inputName.value = \"\";\n}\n\nfunction populateList(todos) {\n  // for (let idx = 0; idx < todos.length; idx++) {\n  //   const checkboxTag = document.createElement(\"input\");\n  //   checkboxTag.setAttribute(\"type\", \"checkbox\");\n  //   const labelTag = document.createElement(\"label\");\n  //   const liTag = document.createElement(\"li\");\n  //   liTag.appendChild(checkboxTag);\n  //   liTag.append(labelTag);\n  \n  //   todosUl.push(liTag);\n  // }\n}\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let children = Array.from(htmlElement.children);\n  children.forEach(node => {\n    node.remove();\n  });\n  const childNode = document.createElement(\"p\");\n  childNode.innerHTML = `${string}`;\n  htmlElement.appendChild(childNode);\n};\n\nhtmlGenerator(\"Party Time.\", partyHeader);\nhtmlGenerator(\"I <3 Vanilla DOM manipulation.\", partyHeader);\n\nmodule.exports = htmlGenerator;\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });