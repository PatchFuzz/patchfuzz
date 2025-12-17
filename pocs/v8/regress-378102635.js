let y = 42;
y = 4;
(function() {
  function bar() {}
  function foo(a) {
    y = a;
    bar();
    return y + 2;
  }
  print(7.2, foo(5.2));
})();
