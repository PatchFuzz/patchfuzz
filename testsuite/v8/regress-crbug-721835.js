





(function TestValidationFailureInForStatement() {
  function Module() {
    "use asm"
    function f() {
      var a = 0;
      for (a = b; 0; 0) {};
      return 0;
    }
    return { f:f };
  }
  assertThrows(() => Module().f(), ReferenceError);
  assertFalse(%IsAsmWasmCode(Module));
})();

(function TestForStatementInVoidFunction() {
  function Module() {
    "use asm"
    function f() {
      for (1; 0; 0) {};
    }
    return { f:f };
  }
  assertDoesNotThrow(() => Module().f());
  assertTrue(%IsAsmWasmCode(Module));
})();
