class Base {}
class Derived extends Base {
  constructor() { super(); }
}
%PrepareFunctionForOptimization(Derived);
var proxy = new Proxy(Base, { get() {} });
print(() => Reflect.construct(Derived, []));
print(() => Reflect.construct(Derived, [], proxy), TypeError);
print(() => Reflect.construct(Derived, [], proxy), TypeError);
%OptimizeFunctionOnNextCall(Derived);
print(() => Reflect.construct(Derived, [], proxy), TypeError);
