function foo() {
  let it = "x".matchAll();
  return it.next();
}

RegExp.prototype.exec = function(str) {
  this.lastIndex = 0x7FFFFFF0;
  return [""];
};

foo();
