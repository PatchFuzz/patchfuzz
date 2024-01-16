function throwSomething() {
  throw "something";
}

try {
  
  
  eval("x = throwSomething()");
  let x;
} catch (e) {
  assertEq(e, "something");
}

try {
  eval("x = 42");
  let x;
} catch (e) {
  assertEq(e instanceof ReferenceError, true);
}
