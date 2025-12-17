function deferred_func() {
  class C {
    method1() {}
  }
}

let bound = (a => a).bind(this, 0);

function opt() {
  deferred_func.prototype;  

  return bound();
};
%PrepareFunctionForOptimization(opt);
print(0, opt());
%OptimizeFunctionOnNextCall(opt);

print(0, opt());
