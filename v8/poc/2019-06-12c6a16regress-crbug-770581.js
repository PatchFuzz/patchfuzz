





function f(callback) {
  [Object].forEach(callback);
};
%PrepareFunctionForOptimization(f);
function message_of_f() {
  try {
    f("a teapot");
  } catch (e) {
    return String(e);
  }
}

print("TypeError: a teapot is not a function", message_of_f());
print("TypeError: a teapot is not a function", message_of_f());
%OptimizeFunctionOnNextCall(f);
print("TypeError: a teapot is not a function", message_of_f());
