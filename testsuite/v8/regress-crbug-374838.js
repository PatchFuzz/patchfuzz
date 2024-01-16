





function foo() {
  var a = [0];
  result = 0;
  for (var i = 0; i < 4; i++) {
    result += a.length;
    a.shift();
  }
  return result;
};
%PrepareFunctionForOptimization(foo);
assertEquals(1, foo());
assertEquals(1, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(1, foo());
