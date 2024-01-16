

load(libdir + "asserts.js");
load(libdir + "immutable-prototype.js");

var g = newGlobal();
if (globalPrototypeChainIsMutable())
  g.__proto__ = {};
assertThrowsInstanceOf(() => g.eval("s += ''"), g.ReferenceError);
