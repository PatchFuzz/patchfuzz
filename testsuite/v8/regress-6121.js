





function foo(o) {
  try {
    for (var x in o) {}
    return false;
  } catch (e) {
    return true;
  }
}
%PrepareFunctionForOptimization(foo);

var o = new Proxy({a:1},{
  getOwnPropertyDescriptor(target, property) { throw target; }
});

assertTrue(foo(o));
assertTrue(foo(o));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(o));
