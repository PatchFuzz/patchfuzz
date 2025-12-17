const A = class A extends Array {
  constructor() {
    super();
    this.y = 1;
  }
};

function foo(x) {
  var a = new A();
  if (x) return a.y;
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo(false));
print(undefined, foo(false));
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo(false));
print(1, foo(true));
