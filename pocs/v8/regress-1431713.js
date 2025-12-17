function foo(x) {
  const unused = -x;
}

%PrepareFunctionForOptimization(foo);
foo(2316465375n);
%OptimizeFunctionOnNextCall(foo);
print(() => foo({__proto__: Object(Symbol)}), TypeError);
