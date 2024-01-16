





function f(a) {
  a.x = 0;
  a[0] = 0.1;
  a.x = {};
};
%PrepareFunctionForOptimization(f);
f(new Array(1));
f(new Array(1));
f(new Array());

%OptimizeFunctionOnNextCall(f);
f(new Array(1));
