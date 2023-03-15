





function g() {
  return 42;
}

var o = {};

function f(o, x) {
  o.f = x;
}

%PrepareFunctionForOptimization(f);

f(o, g);
f(o, g);
f(o, g);
print(42, o.f());
%OptimizeFunctionOnNextCall(f);
f(o, function() { return 0; });
print(0, o.f());
