function f(o) {
  o.get();
}

let obj = new Map();
%PrepareFunctionForOptimization(f);
f(obj);
f(obj);

obj.get = class C {};
print(() => f(obj), TypeError);
%OptimizeFunctionOnNextCall(f);
print(() => f(obj), TypeError);


function g(a) {
  var f;
  f = class {};
  if (a == 1) {
    f = function() {};
  }
  f();
}

%PrepareFunctionForOptimization(g);
print(g, TypeError);
print(g, TypeError);
%OptimizeFunctionOnNextCall(g);
print(g, TypeError);
