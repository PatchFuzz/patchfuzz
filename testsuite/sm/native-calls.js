


const filter = (function iife() {
  try {
    callFunctionFromNativeFrame(n => { throw saveStack() });
  } catch (s) {
    return s;
  }
}());

assertEq(filter.parent.functionDisplayName, "iife");
