function f() {};
int_array = [1];

function foo() {
  var x;
  for (var i = -1; i < 0; i++) {
    x = int_array[i + 1];
    f(function() { x = i; });
  }
}
%PrepareFunctionForOptimization(foo);

foo();
%OptimizeFunctionOnNextCall(foo);
foo();
