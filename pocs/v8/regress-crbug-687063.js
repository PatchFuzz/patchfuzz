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
print(foo, TypeError);
print([Symbol.toPrimitive, 'valueOf', 'toString'], actual);
print(foo, TypeError);
print([Symbol.toPrimitive, 'valueOf', 'toString'], actual);
%OptimizeFunctionOnNextCall(foo);
print(foo, TypeError);
print([Symbol.toPrimitive, 'valueOf', 'toString'], actual);
