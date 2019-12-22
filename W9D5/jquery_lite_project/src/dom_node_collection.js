class DOMNodeCollection {
  constructor(argsArr) {
    this.collections = argsArr;
  }

  html(arg){
    if(arg === undefined){
      this.collections.forEach(element => element.innerHTML = arg);
    }else{
      return this.collections[0].innerHTML;
    }
  }

  empty(){
    html("");
  }

  append(arg){
    if (typeof arg === "string" || arg instanceof HTMLElement || arg instanceof jQuery){
      this.collections.forEach(element => element.append(arg));
    }
  }

  attr(name, value){
    this.collections.forEach(element => element.setAttribute(name, value));
  }

  addClass(value){
    attr("class", value);
  }

  
}

module.exports = DOMNodeCollection;

