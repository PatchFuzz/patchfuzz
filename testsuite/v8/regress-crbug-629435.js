





function bar(v) {
  v.constructor;
}

bar([]);
bar([]);

function foo() {
  var x = -0;
  bar(x + 1);
};
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo();
