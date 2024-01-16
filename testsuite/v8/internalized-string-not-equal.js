






























function equal(o1, o2) {
  return o1 == o2;
};
%PrepareFunctionForOptimization(equal);
var a = 'abc';
var b = "abc";
equal(a, b);
equal(a, b);
%OptimizeFunctionOnNextCall(equal);
assertTrue(equal(1.3, 1.3));
