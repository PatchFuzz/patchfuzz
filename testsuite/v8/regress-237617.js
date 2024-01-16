


























"use strict"

function f() {
  throw new Error("test stack");
}

var error_stack = "";
try {
  f.call(null);
} catch (e) {
  error_stack = e.stack;
}

assertTrue(error_stack.indexOf("test stack") > 0);
assertTrue(error_stack.indexOf("illegal") < 0);
