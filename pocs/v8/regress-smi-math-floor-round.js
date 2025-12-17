function f(o) {
  return Math.floor(o.x_smi) + 1;
};
%PrepareFunctionForOptimization(f);
print(2, f({x_smi: 1}));
print(2, f({x_smi: 1}));
%OptimizeFunctionOnNextCall(f);
print(2, f({x_smi: 1}));

function f2(o) {
  return Math.floor(o.x_tagged) + 1;
};
%PrepareFunctionForOptimization(f2);
var o = {x_tagged: {}};
o.x_tagged = 1.4;
print(2, f2(o));
print(2, f2(o));
%OptimizeFunctionOnNextCall(f2);
print(2, f2(o));

function f3(o) {
  return Math.round(o.x_smi) + 1;
};
%PrepareFunctionForOptimization(f3);
print(2, f3({x_smi: 1}));
print(2, f3({x_smi: 1}));
%OptimizeFunctionOnNextCall(f3);
print(2, f3({x_smi: 1}));

function f4(o) {
  return Math.round(o.x_tagged) + 1;
};
%PrepareFunctionForOptimization(f4);
print(2, f4(o));
print(2, f4(o));
%OptimizeFunctionOnNextCall(f4);
print(2, f4(o));
