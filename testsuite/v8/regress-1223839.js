





function module(global, imports) {
  'use asm';
  var x = imports.fn;
  function f() {}
  return f;
}

module(this, {fn: i => i});
