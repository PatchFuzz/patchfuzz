function foo () {
  try {
    [] = true;
  } catch (e) {
    return e;
  }
}

%PrepareFunctionForOptimization(foo);
const error1 = foo();
%OptimizeFunctionOnNextCall(foo);
print(error1.message, foo().message);
