





function Module() {
  "use asm";
  function f() {}
  return f
}
eval("(" + Module.toString().replace(/;/, String.fromCharCode(8233)) + ")();");
print(%IsAsmWasmCode(Module));  
