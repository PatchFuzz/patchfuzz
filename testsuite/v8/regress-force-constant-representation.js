






var a = [{}];
function f(a) {
  a.push(Infinity);
};
%PrepareFunctionForOptimization(f);
f(a);
f(a);
f(a);
%OptimizeFunctionOnNextCall(f);
f(a);
assertEquals([{}, Infinity, Infinity, Infinity, Infinity], a);
