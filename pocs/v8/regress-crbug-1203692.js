function asm(stdlib, foreign) {
  "use asm";
  var unused = foreign.a | 0;
  function fun() { }
  return fun;
}

print(() => asm(null, { a: 1n }).fun(), TypeError);
