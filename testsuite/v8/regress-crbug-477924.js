



var dummy = new ReferenceError("dummy");

constructors = [ ReferenceError, TypeError];

for (var i in constructors) {
  constructors[i].prototype.__defineGetter__("stack", function() {});
}

for (var i in constructors) {
  var obj = new constructors[i];
  obj.toString();
}
