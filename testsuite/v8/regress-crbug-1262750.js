






function f(o) {
  o.get();
}

let obj = new Map();
%PrepareFunctionForOptimization(f);
f(obj);
f(obj);

obj.get = class C {};
assertThrows(() => f(obj), TypeError);
%OptimizeFunctionOnNextCall(f);
assertThrows(() => f(obj), TypeError);


function g(a) {
  var f;
  f = class {};
  if (a == 1) {
    f = function() {};
  }
  f();
}

%PrepareFunctionForOptimization(g);
assertThrows(g, TypeError);
assertThrows(g, TypeError);
%OptimizeFunctionOnNextCall(g);
assertThrows(g, TypeError);
