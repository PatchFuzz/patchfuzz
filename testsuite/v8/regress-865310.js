





check = function() {
  assertEquals(null, check.caller);
};

var obj = {};
obj.valueOf = check;

function f() {
  Number(obj);
};
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
