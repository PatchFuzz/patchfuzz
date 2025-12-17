function array_fun() {
  for (var i = 0; i < 2; i++) {
    var a = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8];
    var x = new Array();
    x.fixed$length = true;
    for (var j = 0; j < a.length; j++) {
      x.push(a[j]);
    }
    for (var j = 0; j < x.length; j++) {
      if (typeof x[j] != 'number') {
        throw "foo";
      }
      x[j] = x[j];
    }
  }
};
%PrepareFunctionForOptimization(array_fun);
try {
  for (var i = 0; i < 10; ++i) {
    array_fun();
  }
  %OptimizeFunctionOnNextCall(array_fun);
  for (var i = 0; i < 10; ++i) {
    array_fun();
  }
} catch (e) {
  print();
}
