function f(a,b) {
  let t = a >= b;
  while (t != 0) {
    a = a | (b - a);
    let unused = a >= b;
    t = a < b;
  }
}
function test() {
  f(Infinity,1);
  f(undefined, undefined);
}


%PrepareFunctionForOptimization(test);
%PrepareFunctionForOptimization(f);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
