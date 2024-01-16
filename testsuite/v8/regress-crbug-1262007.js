





function foo(...args) {
  class C {}
  C(...args);
}
Object.getPrototypeOf([])[Symbol.iterator] = () => {};
%PrepareFunctionForOptimization(foo);
assertThrows(foo, TypeError, 'Result of the Symbol.iterator method is not an object');
assertThrows(foo, TypeError, 'Result of the Symbol.iterator method is not an object');
%OptimizeFunctionOnNextCall(foo);
assertThrows(foo, TypeError, 'Result of the Symbol.iterator method is not an object');
