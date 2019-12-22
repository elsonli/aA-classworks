const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(selector) {
  console.log(selector);
  if (typeof selector === "string") {
    const nodeList = document.querySelectorAll(selector);
    console.log("here");
    return new DOMNodeCollection((Array.from(nodeList)));
  }else if(selector instanceof HTMLElement){
    console.log("else");
    return new DOMNodeCollection([selector]);
  }
};
