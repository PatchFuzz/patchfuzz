






























(function() {
  var deoptimize = { deopt:true };
  var object = {};

  object.a = function A(x, y, z) {
    assertSame(0, arguments.length);
    return this.b();
  };

  object.b = function B() {
    assertSame(0, arguments.length);
    deoptimize.deopt;
    return arguments.length;
  };

  %PrepareFunctionForOptimization(object.a);
  assertSame(0, object.a());
  assertSame(0, object.a());
  %OptimizeFunctionOnNextCall(object.a);
  assertSame(0, object.a());
  delete deoptimize.deopt;
  assertSame(0, object.a());
})();




(function() {
  'use strict';
  var deoptimize = { deopt:true };
  var object = {};

  object.a = function A(x, y, z) {
    assertSame(0, arguments.length);
    return this.b(1, 2, 3, 4, 5, 6, 7, 8);
  };

  object.b = function B(a, b, c, d, e, f, g, h) {
    assertSame(8, arguments.length);
    deoptimize.deopt;
    return arguments.length;
  };

  %PrepareFunctionForOptimization(object.a);
  assertSame(8, object.a());
  assertSame(8, object.a());
  %OptimizeFunctionOnNextCall(object.a);
  assertSame(8, object.a());
  delete deoptimize.deopt;
  assertSame(8, object.a());
})();
