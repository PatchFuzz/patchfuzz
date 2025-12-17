const source = 'function Module() {\n' +
  '  "use asm";\n' +
  '  var x = 0  var y = 0;\n' +
  '  function f() { return 0; }\n' +
  '  return f;\n' +
  '}\n' +
  'Module();\n';

eval(source);
print(%IsAsmWasmCode(Module));
