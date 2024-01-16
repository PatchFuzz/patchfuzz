





function g() {
  return g.arguments;
}

function f() {
  var result = "R:";
  for (var i = 0; i < 3; ++i) {
    if (i == 1) %OptimizeOsr();
    result += g([1])[0];
    result += g([2])[0];
  }
  return result;
}
%PrepareFunctionForOptimization(f);

assertEquals("R:121212", f());
