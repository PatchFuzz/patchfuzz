





function foo() {
  return v.length + 1;
}

%PrepareFunctionForOptimization(foo);
var v = [];
foo();
v.length = 0xFFFFFFFF;

%OptimizeFunctionOnNextCall(foo);
print(4294967296, foo());
