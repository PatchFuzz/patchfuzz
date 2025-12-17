function f(x, y) { eval(x); return y(); }
var result = f("function y() { return 1; }", function () { return 0; })
print(1, result);

result =
    (function (x) {
      function x() { return 3; }
      return x();
    })(function () { return 2; });
print(3, result);

result =
    (function (x) {
      function x() { return 5; }
      return arguments[0]();
    })(function () { return 4; });
print(5, result);
