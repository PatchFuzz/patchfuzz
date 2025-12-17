function strict() {
  'use strict';
  return this;
}

function test_strict() {
  print(void 0, strict.apply(undefined, arguments));
  print(42, strict.apply(42, arguments));
  print("asdf", strict.apply("asdf", arguments));
};
%PrepareFunctionForOptimization(test_strict);
for (var i = 0; i < 10; i++) test_strict();
%OptimizeFunctionOnNextCall(test_strict);
test_strict();

function test_builtin(receiver) {
  Object.prototype.valueOf.apply(receiver, arguments);
};
%PrepareFunctionForOptimization(test_builtin);
for (var i = 0; i < 10; i++) test_builtin(this);
%OptimizeFunctionOnNextCall(test_builtin);
test_builtin(this);

var exception = false;
try {
  test_builtin(undefined);
} catch (e) {
  exception = true;
}
print(exception);
