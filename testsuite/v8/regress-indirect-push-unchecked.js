





var a = [1.5];

function p() {
  Array.prototype.push.call(a, 1.7);
};
%PrepareFunctionForOptimization(p);
p();
p();
p();
%OptimizeFunctionOnNextCall(p);
p();
a.push({});
p();
assertEquals(1.7, a[a.length - 1]);
