





























function get(a, index) {
  return a[index];
};
%PrepareFunctionForOptimization(get);
var a = new Float32Array(2);
a[0] = 2.5;
a[1] = 3.5;
for (var i = 0; i < 5; i++) get(a, 0);
%OptimizeFunctionOnNextCall(get);
assertEquals(2.5, get(a, 0));
assertEquals(3.5, get(a, 1));

function set(a, index, value) {
  a[index] = value;
};
%PrepareFunctionForOptimization(set);
for (var i = 0; i < 5; i++) set(a, 0, 4.5);
%OptimizeFunctionOnNextCall(set);
set(a, 0, 4.5);
assertEquals(4.5, a[0]);
assertEquals(3.5, a[1]);
