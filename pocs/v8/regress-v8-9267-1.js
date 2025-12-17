function bar(a) {
  return Object.defineProperty(a, 'x', {get() { return 1; }});
}

function foo() {
  return Array(1);
}

%NeverOptimizeFunction(bar);
%PrepareFunctionForOptimization(foo);
const o = foo();  
bar(o);
const a = bar(foo());
%OptimizeFunctionOnNextCall(foo);
const b = bar(foo());

print(%HaveSameMap(a, b));
