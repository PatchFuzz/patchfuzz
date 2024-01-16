





function bar() {
  throw "done";
}

function foo() {
  var i;
  while (i) {
    while (i) {
}
    i++;
  }
  while (true) {
    bar();
  }
}
%PrepareFunctionForOptimization(foo);


%OptimizeFunctionOnNextCall(foo);
assertThrows(foo);
