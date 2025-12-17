function foo(a, i) {
  a[i] = 1;
  return a[i];
}

class MyArray extends (class C extends Array {
}){};

o = new MyArray;

%PrepareFunctionForOptimization(foo);
print(1, foo(o, 0));
print(1, foo(o, 1));
%OptimizeFunctionOnNextCall(foo);
print(1, foo(o, 2));
print(foo);


o.__proto__.__proto__ = new Int32Array(3);
print(foo);


print(undefined, foo(o, 3));
%PrepareFunctionForOptimization(foo);
print(undefined, foo(o, 3));
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo(o, 3));
