console.profile();
eval(`function asmModule() {
  "use asm";
  function x(v) {
    v = v | 0;
  }
  return x;
}
asmModule();`);
