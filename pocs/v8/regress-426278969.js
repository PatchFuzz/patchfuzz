function foo() {
  obj = Object();
  obj.x = Math.floor();
  return obj.x;
}

%EnsureFeedbackVectorForFunction(foo);
print(undefined, foo());
print(undefined, foo());
