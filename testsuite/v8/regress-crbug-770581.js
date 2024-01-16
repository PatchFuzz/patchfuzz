





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

assertEquals("TypeError: a teapot is not a function", message_of_f());
assertEquals("TypeError: a teapot is not a function", message_of_f());
%OptimizeFunctionOnNextCall(f);
assertEquals("TypeError: a teapot is not a function", message_of_f());
