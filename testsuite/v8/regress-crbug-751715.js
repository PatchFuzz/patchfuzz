





class Base {}
class Derived extends Base {
  constructor() { super(); }
}
%PrepareFunctionForOptimization(Derived);
var proxy = new Proxy(Base, { get() {} });
assertDoesNotThrow(() => Reflect.construct(Derived, []));
assertThrows(() => Reflect.construct(Derived, [], proxy), TypeError);
assertThrows(() => Reflect.construct(Derived, [], proxy), TypeError);
%OptimizeFunctionOnNextCall(Derived);
assertThrows(() => Reflect.construct(Derived, [], proxy), TypeError);
