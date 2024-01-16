





function foo(a, i) {
  a[i] = 1;
  return a[i];
}

class MyArray extends (class C extends Array {
}){};

o = new MyArray;

%PrepareFunctionForOptimization(foo);
assertEquals(1, foo(o, 0));
assertEquals(1, foo(o, 1));
%OptimizeFunctionOnNextCall(foo);
assertEquals(1, foo(o, 2));
assertOptimized(foo);


o.__proto__.__proto__ = new Int32Array(3);



assertEquals(undefined, foo(o, 3));
assertUnoptimized(foo);
%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo(o, 3));
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo(o, 3));
