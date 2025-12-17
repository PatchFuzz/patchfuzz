function foo(...args) {
  class C {}
  C(...args);
}
Object.getPrototypeOf([])[Symbol.iterator] = () => {};
%PrepareFunctionForOptimization(foo);
print(foo, TypeError, 'Result of the Symbol.iterator method is not an object');
print(foo, TypeError, 'Result of the Symbol.iterator method is not an object');
%OptimizeFunctionOnNextCall(foo);
print(foo, TypeError, 'Result of the Symbol.iterator method is not an object');
