





var x = {};
x.__defineGetter__('0', () => 0);
x.a = {
  v: 1.51
};

var y = {};
y.a = {
  u: 'OK'
};

function foo(o) {
  return o.a.u;
};
%PrepareFunctionForOptimization(foo);
foo(y);
foo(y);
foo(x);
%OptimizeFunctionOnNextCall(foo);
%DebugPrint(foo(x));
