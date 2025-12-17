function foo() {
  'use strict';
  return arguments;
}

var get = Object.getOwnPropertyDescriptor(foo(), "callee").get;
var set = Object.getOwnPropertyDescriptor(foo(), "callee").set;
print(get, set);
