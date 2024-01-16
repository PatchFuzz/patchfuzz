






























function f() {
  try {
    throw 0;
  } catch (e) {
    try {
      var x = { a: 'hest' };
      x.m = function (e) { return x.a; };
    } catch (e) {
    }
  }
  return x;
}

var o = f();
%PrepareFunctionForOptimization(o.m);
assertEquals('hest', o.m());
assertEquals('hest', o.m());
assertEquals('hest', o.m());
%OptimizeFunctionOnNextCall(o.m);
assertEquals('hest', o.m());




var global = 'horse';
var p = { get global() { return global; }};
assertEquals('horse', p.global);
