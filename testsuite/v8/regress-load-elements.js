




























function bad_func(o, a) {
  for (var i = 0; i < 1; ++i) {
    o.prop = 0;
    var x = a[0];
  }
};
%PrepareFunctionForOptimization(bad_func);
o = new Object();
a = {};
a[0] = 1;
bad_func(o, a);

o = new Object();
bad_func(o, a);




%OptimizeFunctionOnNextCall(bad_func);
bad_func(o, "");
