function f() { }

var foo = function() {
  return !new f();
};

function test() {
  return foo();
};

%PrepareFunctionForOptimization(test);
test();
%OptimizeFunctionOnNextCall(test);
test();
