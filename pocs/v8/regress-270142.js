function f(x) {
  return x;
}

function g(x) {
  "use strict";
  return x;
}

function checkNameDescriptor(f) {
  var descriptor = Object.getOwnPropertyDescriptor(f, "name");
  print(descriptor.configurable);
  print(descriptor.enumerable);
  print(descriptor.writable);
}

checkNameDescriptor(f);
checkNameDescriptor(g);
