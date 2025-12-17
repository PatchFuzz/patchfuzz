"use strict";

function getTypeName(receiver) {
  Error.prepareStackTrace = function(e, stack) { return stack; }
  var stack = (function() { return new Error().stack; }).call(receiver);
  Error.prepareStackTrace = undefined;
  return stack[0].getTypeName();
}

print(getTypeName(undefined));
print(getTypeName(null));
print("Number", getTypeName(1));
print("String", getTypeName(""));
print("Boolean", getTypeName(false));
print("Object", getTypeName({}));
print("Array", getTypeName([]));
print("Proxy", getTypeName(new Proxy({},{})));
print("Custom", getTypeName(new (function Custom(){})()));
