var filler = "

var scope = { x:23 };

with(scope) {
  eval(
    "scope.f = (function outer() {" +
    "  function inner() {" +
    "    return x;" +
    "  }" +
    "  return inner;" +
    "})();" +
    filler
  );
};

print(23, scope.f());
