





function foo() {
  const r = {e: NaN, g: undefined, c: undefined};
  const u = {__proto__: {}, e: new Set(), g: 0, c: undefined};
  return r;
};
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
const o = foo();
Object.defineProperty(o, 'c', {value: 42});
