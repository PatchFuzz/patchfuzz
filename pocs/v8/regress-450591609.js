function module(global, imports, buffer) {
  'use asm';
  var g = imports.g | 0;

  function f() {}
  return {f: f};
}

module(globalThis, {});
