var a = new Array(2);
a[0] = 1;
print(%HasSmiElements(a));
print(%HasHoleyElements(a));

function hole(i) {
  return a[i] << 0;
};
%PrepareFunctionForOptimization(hole);
print(1, hole(0));
print(1, hole(0));
%OptimizeFunctionOnNextCall(hole);
print(0, hole(1));
