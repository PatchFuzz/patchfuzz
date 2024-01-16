





function bar(a) {
  delete a[1];
}

function foo(a) {
  var d;
  for (d in a) {
    assertFalse(d === undefined);
    bar(a);
  }
}

%PrepareFunctionForOptimization(foo);
foo([1,2]);
foo([2,3]);
%OptimizeFunctionOnNextCall(foo);
foo([1,2]);
