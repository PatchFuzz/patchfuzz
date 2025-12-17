function foo() {}
foo.__defineGetter__(undefined, function() {});

function bar() {}
function baz(x) {
  return x instanceof bar;
};
%PrepareFunctionForOptimization(baz);
;
%OptimizeFunctionOnNextCall(baz);
baz();
Object.setPrototypeOf(bar, null);
bar[Symbol.hasInstance] = function() {
  return true;
};
print(baz());
