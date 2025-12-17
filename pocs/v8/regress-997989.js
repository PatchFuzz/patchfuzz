function foo(o) {
  for (var i in o) {
    return o[i];
  }
}

var o = { x: 0.5 };


%PrepareFunctionForOptimization(foo);
print(foo(o), 0.5);
print(foo(o), 0.5);
%OptimizeFunctionOnNextCall(foo);
print(foo(o), 0.5);


o.x = "abc";


print(foo(o), "abc");
