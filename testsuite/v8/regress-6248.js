





var sentinelObject = {};
var evaluatedArg = false;
class C extends Object {
  constructor() {
    try {
      super(evaluatedArg = true);
    } catch (e) {
      assertInstanceof(e, TypeError);
      return sentinelObject;
    }
  }
}

%PrepareFunctionForOptimization(C);
Object.setPrototypeOf(C, parseInt);
assertSame(sentinelObject, new C());
assertSame(sentinelObject, new C());
%OptimizeFunctionOnNextCall(C)
assertSame(sentinelObject, new C());
assertTrue(evaluatedArg);
