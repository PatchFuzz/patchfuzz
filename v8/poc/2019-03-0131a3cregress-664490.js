





var foo = function(msg) {};

foo = function (value) {
  print(false, value);
}

function f() {
  foo(undefined == 0);
}

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
f();
