





function asm() {
  'use asm';
  return {};
}

function rec() {
  asm();
  rec();
}
assertThrows(() => rec(), RangeError);
