





function generateAsmJs() {
  'use asm';
  function fun() { fun(); }
  return fun;
}

assertThrows(generateAsmJs(), RangeError);
