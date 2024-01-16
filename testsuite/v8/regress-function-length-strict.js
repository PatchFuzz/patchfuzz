




























"use strict";

function foo(a, b, c) {
  return b;
}

var desc = Object.getOwnPropertyDescriptor(foo, 'length');
assertEquals(3, desc.value);
assertFalse(desc.writable);
assertFalse(desc.enumerable);
assertTrue(desc.configurable);
assertThrows(function() { foo.length = 2; }, TypeError);
