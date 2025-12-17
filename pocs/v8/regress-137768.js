function TestConstructor() {
  this[0] = 1;
  this[1] = 2;
  this[2] = 3;
}

function bad_func(o, a) {
  var s = 0;
  for (var i = 0; i < 1; ++i) {
    o.newFileToChangeMap = undefined;
    var x = a[0];
    s += x;
  }
  return s;
};
%PrepareFunctionForOptimization(bad_func);
o = new Object();
a = new TestConstructor();
bad_func(o, a);



o = new Object();
a = new TestConstructor();
bad_func(o, a);




o = new Object();
a = new TestConstructor();
%OptimizeFunctionOnNextCall(bad_func);
bad_func(o, a);




o = new Object();



a = [2.122e-314, 2.122e-314, 2.122e-314];
bad_func(o, a);
