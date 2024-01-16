




























function lazyDeopt() {
  %DeoptimizeFunction(test);
  return "deopt";
}

var x = {toString: lazyDeopt};

function g(x) {
  return "result";
}

function test(x) {
  return g(void (x == ''));
};
%PrepareFunctionForOptimization(test);
test(x);
%OptimizeFunctionOnNextCall(test);
assertEquals("result", test(x));
