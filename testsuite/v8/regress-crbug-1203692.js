



function asm(stdlib, foreign) {
  "use asm";
  var unused = foreign.a | 0;
  function fun() { }
  return fun;
}

assertThrows(() => asm(null, { a: 1n }).fun(), TypeError);
