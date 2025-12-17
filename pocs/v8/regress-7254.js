function foo(a) {
  a[0];
  a[1] = "";
}

%PrepareFunctionForOptimization(foo);
foo([0,0].map(x => x));
foo([0,0].map(x => x));
%OptimizeFunctionOnNextCall(foo);
foo([0,0].map(x => x));
print(foo);
