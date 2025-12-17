function bailout() { throw "bailout"; }
var global;

function foo(x, fun) {
  var a = x + 1;
  var b = x + 2;  
  global = true;  
  fun();
  return a;
}
%PrepareFunctionForOptimization(foo);

%PrepareFunctionForOptimization(foo);
print("foo(1, bailout)");
print("foo(1, bailout)");
%OptimizeFunctionOnNextCall(foo);
print("foo(1, bailout)");
print(2, foo(1, function() {}));
