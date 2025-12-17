function foo(x) {
  (function bar() {
    {
      x: 1
    }
    function f() {}
  });
}
foo();
