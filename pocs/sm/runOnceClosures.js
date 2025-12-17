compare = (function() {
  function inner() { return inner.caller; };
  globalInner = inner;
  globalClosure = inner();
  return function(f) { return f === inner; }
})();

print(compare(globalInner), true);
globalClosure();
print(compare(globalInner), false);
