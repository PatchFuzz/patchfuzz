





function Module(global, env) {
  "use asm";
  var unused_fun = env.fun;
  function f() {}
  return { f:f }
}
assertThrows(() => Module(), TypeError);
assertFalse(%IsAsmWasmCode(Module));
