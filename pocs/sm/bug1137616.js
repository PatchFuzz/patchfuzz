;
;

var g = newGlobal();
if (globalPrototypeChainIsMutable())
  g.__proto__ = {};
print(() => g.eval("s += ''"), g.ReferenceError);
