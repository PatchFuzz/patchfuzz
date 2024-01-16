





function Module(stdlib, foreign, heap) {
  "use asm";
  var a = stdlib.Math.PI;
  function f() { return a }
  return { f:f };
}
Module.length
