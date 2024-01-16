





function f(a1, a2) {
  var v7 = a2[0];
  var v8 = a1[0];
  a2[0] = 0.3;
};
%PrepareFunctionForOptimization(f);
v6 = new Array(1);
v6[0] = "tagged";
f(v6, [1]);
v5 = new Array(1);
v5[0] = 0.1;
f(v5, v5);
v5 = new Array(10);
f(v5, v5);
%OptimizeFunctionOnNextCall(f);
f(v5, v5);
v5[0];
