





function foo() {
  String.prototype.startsWith.call(undefined, "");
}
%PrepareFunctionForOptimization(foo);
print(foo);
%OptimizeFunctionOnNextCall(foo);
print(foo);

function bar() {
  "bla".startsWith("", Symbol(''));
}
%PrepareFunctionForOptimization(bar);
print(bar);
%OptimizeFunctionOnNextCall(bar);
print(bar);
