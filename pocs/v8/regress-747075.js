r = [
  14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
  14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14
];

function f() {
  r2 = r.map(function(y) {
    return y / 64;
  });
  print(r2[0] < 1);
};
%PrepareFunctionForOptimization(f);
for (let i = 0; i < 1000; ++i) f();
for (let i = 0; i < 1000; ++i) f();
%OptimizeFunctionOnNextCall(f);
for (let i = 0; i < 1000; ++i) f();
