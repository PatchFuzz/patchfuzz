var g = newGlobal({freezeBuiltins: true});

g.evaluate("" + function checkFrozen(name) {
  
  let desc = Object.getOwnPropertyDescriptor(this, name);
  assertEq(desc.writable, false);
  assertEq(desc.configurable, false);

  
  let ctor = desc.value;
  assertEq(Object.isFrozen(ctor), true);

  
  if (ctor.prototype) {
    assertEq(Object.isSealed(ctor.prototype), true);
  }
});

g.checkFrozen("Object");
g.checkFrozen("Array");
g.checkFrozen("Function");
