




























function f(i, b) {
  var a = 0;
  if (b) {
    var c = 1 << i;
    a = c + c;
  }
  var x = a >> 3;
  return a;
};
%PrepareFunctionForOptimization(f);
f(1, false);
f(1, true);
%OptimizeFunctionOnNextCall(f);
assertEquals((1 << 30) * 2, f(30, true));


var global = 1;

function f2(b) {
  var a = 0;
  if (b) {
    a = global;
  }
  var x = a >> 3;
  return a;
};
%PrepareFunctionForOptimization(f2);
f2(false);
f2(true);
%OptimizeFunctionOnNextCall(f2);
global = 2.5;
assertEquals(global, f2(true));
