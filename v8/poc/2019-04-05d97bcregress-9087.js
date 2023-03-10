





function constructor() {}
const obj = Object.create(constructor.prototype);

for (let i = 0; i < 1020; ++i) {
  constructor.prototype["x" + i] = 42;
}

function foo() {
  return obj instanceof constructor;
};
%PrepareFunctionForOptimization(foo);
print(foo());
print(foo());
%OptimizeFunctionOnNextCall(foo);
print(foo());
