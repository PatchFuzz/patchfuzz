val = "hello";
function foo(i) {
  return val[i];
}
print(undefined, foo(8));
Object.prototype[4294967295] = "boom";
print("boom", foo(4294967295));
%PrepareFunctionForOptimization(foo);
print(undefined, foo(8));
print("boom", foo(4294967295));
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo(8));
print("boom", foo(4294967295));
