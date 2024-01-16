




























var a = new Array(2);
a[0] = 1;
assertTrue(%HasSmiElements(a));
assertTrue(%HasHoleyElements(a));

function hole(i) {
  return a[i] << 0;
};
%PrepareFunctionForOptimization(hole);
assertEquals(1, hole(0));
assertEquals(1, hole(0));
%OptimizeFunctionOnNextCall(hole);
assertEquals(0, hole(1));
