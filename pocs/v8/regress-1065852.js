function* asm() {
  "use asm";
  function x(v) {
    v = v | 0;
  }
  return x;
}


asm().next();
