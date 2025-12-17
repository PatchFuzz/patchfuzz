(function(foo, foreign) {
  'use asm';
  var fn = foreign.fn;
  function f() { }
  return f;
})(this, {fn: x => x});
