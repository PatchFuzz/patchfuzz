





function foo(a, b) {
  return a + "0123456789012";
}

%PrepareFunctionForOptimization(foo);
foo("a");
foo("a");
%OptimizeFunctionOnNextCall(foo);
foo("a");

var a = "a".repeat(%StringMaxLength());
assertThrows(function() { foo(a); }, RangeError);

%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
assertThrows(function() { foo(a); }, RangeError);
assertOptimized(foo);
