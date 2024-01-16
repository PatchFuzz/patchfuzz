






function foo() {
  var arr = new Uint8Array();
  try {
    x.next();
  } catch (e) {}
  var x = arr.entries();
  x.next();
}

function bar() {
  foo();
}

%PrepareFunctionForOptimization(bar);
bar();
%OptimizeFunctionOnNextCall(bar);
bar();
