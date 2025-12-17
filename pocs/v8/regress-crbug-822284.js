function foo(a) {
  a = "" + Math.abs(a);
  return a.charCodeAt(0);
}


%PrepareFunctionForOptimization(foo);
String.fromCharCode(49);

const o = {};
o[1..toString()] = 1;

print(49, foo(1));
print(49, foo(1));
%OptimizeFunctionOnNextCall(foo);
print(49, foo(1));
