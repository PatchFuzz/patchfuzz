function foo(a, i) {
  a[i] = 1;
  return a[i];
}

class MyArray extends (class C extends Array {
}){};

o = new MyArray;

%EnsureFeedbackVectorForFunction(foo);

print(1, foo(o, 0));
print(1, foo(o, 1));


o.__proto__.__proto__ = new Int32Array(2);



print(undefined, foo(o, 2));
print(undefined, foo(o, 2));
