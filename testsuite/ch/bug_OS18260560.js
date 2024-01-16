




(function foo(a = function bar() {
  with ({}) {
      foo;
  }
}()) {})();

console.log("pass");
