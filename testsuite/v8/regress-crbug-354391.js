





function load(a, i) {
  return a[i];
};
%PrepareFunctionForOptimization(load);
function f2(a, b, c, d, index) {
  return load(arguments, index);
}

f2(1, 2, 3, 4, "foo");
f2(1, 2, 3, 4, "foo");
load([11, 22, 33], 0);
assertEquals(11, f2(11, 22, 33, 44, 0));

%OptimizeFunctionOnNextCall(load);
assertEquals(11, f2(11, 22, 33, 44, 0));
