






const actual = [];




function foo() {
  actual.length = 0;
  const lhs = Symbol();
  const rhs = new Proxy({}, {
    get: function(target, property, receiver) {
      actual.push(property);
      return undefined;
    }
  });

  return lhs < rhs;
};
%PrepareFunctionForOptimization(foo);
assertThrows(foo, TypeError);
assertEquals([Symbol.toPrimitive, 'valueOf', 'toString'], actual);
assertThrows(foo, TypeError);
assertEquals([Symbol.toPrimitive, 'valueOf', 'toString'], actual);
%OptimizeFunctionOnNextCall(foo);
assertThrows(foo, TypeError);
assertEquals([Symbol.toPrimitive, 'valueOf', 'toString'], actual);
