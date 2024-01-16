





























function f(x) {
  return x;
}

function g(x) {
  "use strict";
  return x;
}

function checkNameDescriptor(f) {
  var descriptor = Object.getOwnPropertyDescriptor(f, "name");
  assertTrue(descriptor.configurable);
  assertFalse(descriptor.enumerable);
  assertFalse(descriptor.writable);
}

checkNameDescriptor(f);
checkNameDescriptor(g);
