




























function load(a, i) {
  return a[i];
};
%PrepareFunctionForOptimization(load);
load([1, 2, 3], 'length');
load(3);
load([1, 2, 3], 3);
load(0, 0);
%OptimizeFunctionOnNextCall(load);
assertEquals(2, load([1, 2, 3], 1));
assertEquals(undefined, load(0, 0));

function store(a, i, x) {
  a[i] = x;
};
%PrepareFunctionForOptimization(store);
store([1, 2, 3], 'length', 3);
store(3);
store([1, 2, 3], 3, 3);
store(0, 0, 1);
%OptimizeFunctionOnNextCall(store);
var a = [1, 2, 3];
store(a, 1, 1);
assertEquals(1, a[1]);
store(0, 0, 1);
