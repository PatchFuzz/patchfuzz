



function Module(stdlib, imports, buffer) {
  "use asm";
  var a = imports.x | 0;
  function f() {
    return a | 0;
  }
  return { f:f };
}
try {
  Module(this).f();
} catch(e) {
  assertInstanceof(e, TypeError);
  
  
  print(e);
}
