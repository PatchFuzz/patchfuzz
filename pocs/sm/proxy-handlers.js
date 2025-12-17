const stack = (function iife() {
  return (new Proxy({}, {
    get: function get(t, n, r) { return saveStack(); }
  })).stack;
}());

print(stack.functionDisplayName, "get");
print(stack.parent.functionDisplayName, "iife");
