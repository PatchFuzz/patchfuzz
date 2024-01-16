






function foo(a, i) {
  a[i] = 1;
  return a[i];
}

class MyArray extends (class C extends Array {
}){};

o = new MyArray;

%EnsureFeedbackVectorForFunction(foo);

assertEquals(1, foo(o, 0));
assertEquals(1, foo(o, 1));


o.__proto__.__proto__ = new Int32Array(2);



assertEquals(undefined, foo(o, 2));
assertEquals(undefined, foo(o, 2));
