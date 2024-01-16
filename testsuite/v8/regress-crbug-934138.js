





(function TestTrailingJunkAfterExport() {
  function Module() {
    "use asm";
    function f() {}
    return {f: f}
    %kaboom;
  }
  assertThrows(() => Module(), ReferenceError);
  assertFalse(%IsAsmWasmCode(Module));
})();

(function TestExportWithSemicolon() {
  function Module() {
    "use asm";
    function f() {}
    return {f: f};
    
  }
  assertDoesNotThrow(() => Module());
  assertTrue(%IsAsmWasmCode(Module));
})();

(function TestExportWithoutSemicolon() {
  function Module() {
    "use asm";
    function f() {}
    return {f: f}
    
  }
  assertDoesNotThrow(() => Module());
  assertTrue(%IsAsmWasmCode(Module));
})();
