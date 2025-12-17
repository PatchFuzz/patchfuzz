;

function throwsOnNonObjectDisposable() {
  using a = 1;
}
print(throwsOnNonObjectDisposable, TypeError);

function throwsOnNonFunctionDispose() {
  using a = { [Symbol.dispose]: 1 };
}
print(throwsOnNonFunctionDispose, TypeError);
