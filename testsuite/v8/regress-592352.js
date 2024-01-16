





function __f_76() {
  "use asm";
  function __f_72() {
    %OptimizeFunctionOnNextCall();
  }
  return {__f_72:__f_72};
}

try {
  assertTrue(%IsAsmWasmCode(__f_76));
  assertTrue(false);
} catch (e) {
  print("Caught: " + e);
}
