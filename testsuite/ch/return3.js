




let asmModule = (function AsmModule() {
  'use asm';
  function conditionnalReturn() {
    if (0) {
      return 0;
    }
  }
  return conditionnalReturn;
})();
print(asmModule());
