var doubles = new Float64Array(1);
function ToHeapNumber(i) {
  doubles[0] = i;
  return doubles[0];
};
%PrepareFunctionForOptimization(ToHeapNumber);
for (var i = 0; i < 3; i++) ToHeapNumber(i);
%OptimizeFunctionOnNextCall(ToHeapNumber);
ToHeapNumber(1);

function Fail(a, i, v) {
  a[i] = v;
};
%PrepareFunctionForOptimization(Fail);
for (var i = 0; i < 3; i++) Fail(new Array(1), 1, i);
%OptimizeFunctionOnNextCall(Fail);

Fail(new Array(1), ToHeapNumber(1050), 3);
