





function bar(a) {
  var x = a[0];
  return x == undefined;
}

%PrepareFunctionForOptimization(bar);

bar([, 2, 3]);
bar([, 'two', 'three']);
bar([, 2, 3]);

%OptimizeFunctionOnNextCall(bar);
bar([, 2, 3]);

assertOptimized(bar);
