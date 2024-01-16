






function foo(o) {
  for (var i in o) {
    return o[i];
  }
}

var o = { x: 0.5 };


%PrepareFunctionForOptimization(foo);
assertEquals(foo(o), 0.5);
assertEquals(foo(o), 0.5);
%OptimizeFunctionOnNextCall(foo);
assertEquals(foo(o), 0.5);


o.x = "abc";


assertEquals(foo(o), "abc");
