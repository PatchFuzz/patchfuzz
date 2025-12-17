var a = [42];
function foo() {
  return a.filter(() => true);
}

%PrepareFunctionForOptimization(foo);
a[25] = undefined;
var result1 = foo();
print([42, undefined], result1);
%OptimizeFunctionOnNextCall(foo);
var result2 = foo();
print([42, undefined], result2);
if(%IsUndefinedDoubleEnabled()) {
  print(%HasDoubleElements(result2));
}
