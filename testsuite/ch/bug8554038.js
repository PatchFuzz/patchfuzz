




var obj1 = {};
var obj2 = {};
obj1.method1 = rest;

function foo() {
  bar(1, 2);
}

function bar() {
  obj1.method1.apply(obj2, arguments);
}

function rest(arg1, ...argRest) {
  WScript.Echo(argRest.length);
}

foo();
foo();
