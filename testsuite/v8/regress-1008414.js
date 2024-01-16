





(function bar() {
  (function foo(
      x = new class B extends A(eval) { }
    ) {
        eval();
    })();
  eval();
})()
