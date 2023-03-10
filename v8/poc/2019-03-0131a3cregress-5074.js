





var s = [,0.1];

function foo(a, b) {
  var x = s[a];
  s[1] = 0.1;
  return x + b;
}

%PrepareFunctionForOptimization(foo);
print(2.1, foo(1, 2));
print(2.1, foo(1, 2));
%OptimizeFunctionOnNextCall(foo);
print("undefined2", foo(0, "2"));
