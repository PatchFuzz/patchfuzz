





























function f(x, y) { eval(x); return y(); }
var result = f("function y() { return 1; }", function () { return 0; })
assertEquals(1, result);

result =
    (function (x) {
      function x() { return 3; }
      return x();
    })(function () { return 2; });
assertEquals(3, result);

result =
    (function (x) {
      function x() { return 5; }
      return arguments[0]();
    })(function () { return 4; });
assertEquals(5, result);
