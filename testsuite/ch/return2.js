




let asmModule = (function AsmModule(stdlib) {
  'use asm';
  function empty() {
  }
  function changeType() {
    return empty()|0;
  }
  return { empty:empty };
})({});
print(asmModule.empty());
