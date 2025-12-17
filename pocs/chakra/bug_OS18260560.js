(function foo(a = function bar() {
  with ({}) {
      foo;
  }
}()) {})();

print("pass");
