"use strict";

function foo(a, b, c) {
  return b;
}

var desc = Object.getOwnPropertyDescriptor(foo, 'length');
print(3, desc.value);
print(desc.writable);
print(desc.enumerable);
print(desc.configurable);
print(function() { foo.length = 2; }, TypeError);
