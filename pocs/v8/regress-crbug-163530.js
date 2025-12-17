(function() {
  var deoptimize = { deopt:true };
  var object = {};

  object.a = function A(x, y, z) {
    print(0, arguments.length);
    return this.b();
  };

  object.b = function B() {
    print(0, arguments.length);
    deoptimize.deopt;
    return arguments.length;
  };

  %PrepareFunctionForOptimization(object.a);
  print(0, object.a());
  print(0, object.a());
  %OptimizeFunctionOnNextCall(object.a);
  print(0, object.a());
  delete deoptimize.deopt;
  print(0, object.a());
})();




(function() {
  'use strict';
  var deoptimize = { deopt:true };
  var object = {};

  object.a = function A(x, y, z) {
    print(0, arguments.length);
    return this.b(1, 2, 3, 4, 5, 6, 7, 8);
  };

  object.b = function B(a, b, c, d, e, f, g, h) {
    print(8, arguments.length);
    deoptimize.deopt;
    return arguments.length;
  };

  %PrepareFunctionForOptimization(object.a);
  print(8, object.a());
  print(8, object.a());
  %OptimizeFunctionOnNextCall(object.a);
  print(8, object.a());
  delete deoptimize.deopt;
  print(8, object.a());
})();
