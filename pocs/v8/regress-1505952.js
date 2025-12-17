function bar(a, b) {
  if (a instanceof Array) {
    for (var i = 0; i < a.length; i++) {
      if (!bar(a[i], b[i])) return false;
    }
  }
}

function foo() {
  bar();
  bar();
}

%PrepareFunctionForOptimization(bar);
%PrepareFunctionForOptimization(foo);
foo();
bar([[, 1.5], {}], [[, 1.5], {}]);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
