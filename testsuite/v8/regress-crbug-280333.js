




























function funky() { return false; }
var global;

function foo(x, fun) {
  var a = x + 1;
  var b = x + 2;  
  global = true;  
  if (fun()) {
    return a;
  }
  return 0;
}

%PrepareFunctionForOptimization(foo);
assertEquals(0, foo(1, funky));
assertEquals(0, foo(1, funky));
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo(1, funky));
assertEquals(2, foo(1, function() { return true; }));
