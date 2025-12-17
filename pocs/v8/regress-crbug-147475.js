function worker1(ignored) {
  return 100;
}

function factory(worker) {
  return function(call_depth) {
    if (call_depth == 0) return 10;
    return 1 + worker(call_depth - 1);
  }
}

var f1 = factory(worker1);
var f2 = factory(f1);
%PrepareFunctionForOptimization(f1);
print(11, f2(1));
%OptimizeFunctionOnNextCall(f1);
%PrepareFunctionForOptimization(f2);
print(10, f1(0));
%OptimizeFunctionOnNextCall(f2);
print(102, f2(2));
print(102, f2(2));
