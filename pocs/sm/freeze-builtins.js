var g = newGlobal({freezeBuiltins: true});

g.evaluate("" + function checkFrozen(name) {
  
  let desc = Object.getOwnPropertyDescriptor(this, name);
  print(desc.writable, false);
  print(desc.configurable, false);

  
  let ctor = desc.value;
  print(Object.isFrozen(ctor), true);

  
  if (ctor.prototype) {
    print(Object.isSealed(ctor.prototype), true);
  }
});

g.checkFrozen("Object");
g.checkFrozen("Array");
g.checkFrozen("Function");

g.checkFrozen("ArrayBuffer");
g.checkFrozen("Int32Array");
g.checkFrozen("Number");
g.checkFrozen("String");
g.checkFrozen("Proxy");
g.checkFrozen("Promise");
g.checkFrozen("RegExp");
g.checkFrozen("Map");
g.checkFrozen("WeakMap");
g.checkFrozen("WeakRef");
g.checkFrozen("Error");
g.checkFrozen("TypeError");

g.checkFrozen("JSON");
g.checkFrozen("Math");
