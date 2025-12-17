function foo() {
  const a = [];
  a[0] = 1;
  return a[0];
}

function bar() {
  const a = new Array(10);
  a[0] = 1;
  return a[0];
}

Object.setPrototypeOf(Array.prototype, new Int8Array());
%EnsureFeedbackVectorForFunction(foo);
print(undefined, foo());
print(undefined, foo());

%EnsureFeedbackVectorForFunction(bar);
print(undefined, bar());
print(undefined, bar());
