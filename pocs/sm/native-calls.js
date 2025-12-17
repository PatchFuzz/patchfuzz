const filter = (function iife() {
  try {
    callFunctionFromNativeFrame(n => { throw saveStack() });
  } catch (s) {
    return s;
  }
}());

print(filter.parent.functionDisplayName, "iife");
