





var k = "0101010101010101" + "01010101";

function foo(s) {
  return k + s;
};
%PrepareFunctionForOptimization(foo);
foo("a");
foo("a");
%OptimizeFunctionOnNextCall(foo);
var x = foo("");
