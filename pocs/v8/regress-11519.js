function bar(a) {
  return Object.defineProperty(a, 'x', {get() { return 1; }});
}

function foo() {
  return {};
}

%NeverOptimizeFunction(bar);
%PrepareFunctionForOptimization(foo);
const o = foo();  
%SimulateNewspaceFull();
bar(o);
const a = bar(foo());
%SimulateNewspaceFull();
%OptimizeFunctionOnNextCall(foo);
const b = bar(foo());

print(%HaveSameMap(a, b));
