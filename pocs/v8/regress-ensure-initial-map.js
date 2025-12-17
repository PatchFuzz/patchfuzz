var x = Object.getOwnPropertyDescriptor({get x() {}}, 'x').get;
function f(o, b) {
  if (b) {
    return o instanceof x;
  }
};
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
f();

function g() {
  return new x();
};
%PrepareFunctionForOptimization(g);
%OptimizeFunctionOnNextCall(g);
print(() => g());
