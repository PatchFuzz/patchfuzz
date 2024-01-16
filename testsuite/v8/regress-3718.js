



"use strict";

function getTypeName(receiver) {
  Error.prepareStackTrace = function(e, stack) { return stack; }
  var stack = (function() { return new Error().stack; }).call(receiver);
  Error.prepareStackTrace = undefined;
  return stack[0].getTypeName();
}

assertNull(getTypeName(undefined));
assertNull(getTypeName(null));
assertEquals("Number", getTypeName(1));
assertEquals("String", getTypeName(""));
assertEquals("Boolean", getTypeName(false));
assertEquals("Object", getTypeName({}));
assertEquals("Array", getTypeName([]));
assertEquals("Proxy", getTypeName(new Proxy({},{})));
assertEquals("Custom", getTypeName(new (function Custom(){})()));
