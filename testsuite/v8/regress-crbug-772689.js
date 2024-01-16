





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
assertEquals(undefined, foo(false));
assertEquals(undefined, foo(false));
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo(false));
assertEquals(1, foo(true));
