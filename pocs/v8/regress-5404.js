function foo(a, b) {
  return a + "0123456789012";
}

%PrepareFunctionForOptimization(foo);
foo("a");
foo("a");
%OptimizeFunctionOnNextCall(foo);
foo("a");

var a = "a".repeat(%StringMaxLength());
print(function() { foo(a); }, RangeError);

%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
print(function() { foo(a); }, RangeError);



