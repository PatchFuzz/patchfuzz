var sentinelObject = {};
var evaluatedArg = false;
class C extends Object {
  constructor() {
    try {
      super(evaluatedArg = true);
    } catch (e) {
      print(e, TypeError);
      return sentinelObject;
    }
  }
}

%PrepareFunctionForOptimization(C);
Object.setPrototypeOf(C, parseInt);
print(sentinelObject, new C());
print(sentinelObject, new C());
%OptimizeFunctionOnNextCall(C)
print(sentinelObject, new C());
print(evaluatedArg);
