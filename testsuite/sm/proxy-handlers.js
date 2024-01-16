

const stack = (function iife() {
  return (new Proxy({}, {
    get: function get(t, n, r) { return saveStack(); }
  })).stack;
}());

assertEq(stack.functionDisplayName, "get");
assertEq(stack.parent.functionDisplayName, "iife");
