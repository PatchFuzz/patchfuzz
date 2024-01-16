



var asm = function(global) {
  'use asm';
  function f() {}
  return f;
};
function asm2(global, imports) {
  'use asm';
  var asm = imports.asm;
  function f() {}
  return {f: f};
}
asm2(this, {asm: asm});
