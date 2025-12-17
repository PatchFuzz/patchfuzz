function markConstant(obj, key) {
  print(getObjectFuseState(obj).properties[key], "Untracked");
  
  
  
  obj[key] = Object.getOwnPropertyDescriptor(obj, key).value;
}
function testGlobal() {
  var g = newGlobal({sameCompartmentAs: this, useWindowProxy: false});
  addObjectFuse(g);
  print(getObjectFuseState(g).generation, 0);

  
  g.evaluate("var foo = 1; var bar; bar = function() {}; function baz() {};");
  var state = getObjectFuseState(g);
  print(state.properties.foo, "Constant");
  print(state.properties.bar, "Constant");
  print(state.properties.baz, "Untracked");

  
  
  g.evaluate("let Object = {};");
  print(getObjectFuseState(g).generation, 0);

  
  markConstant(g, "Function");
  g.evaluate("let Function = {};");
  print(getObjectFuseState(g).generation, 1);

  
  
  g.Math = 1;
  g.Math = 2;
  g.evaluate("let Math = {};");
  print(getObjectFuseState(g).generation, 2);
}
testGlobal();
testGlobal();
