





function C(a, b) {
  this.a = a;
  this.b = b;
}

var c = new C(42, 4.2);
var cc = new C(4.2, 42);

function foo() { return cc.a }

%PrepareFunctionForOptimization(foo);
print(4.2, foo());


Object.defineProperty(c, 'a', { value: undefined });

%OptimizeFunctionOnNextCall(foo);
print(4.2, foo());
