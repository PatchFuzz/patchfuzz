const n = 2 ** 32;
const x = new Float32Array();

function f() {
  for (var i = 96; i < 100; i += 4) {
    x[i] = i + n;
  }
};
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
