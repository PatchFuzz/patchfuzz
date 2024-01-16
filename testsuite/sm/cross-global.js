const Module = WebAssembly.Module;


var g = newGlobal();
var code1 = g.eval("wasmTextToBinary('(module)')");
var code2 = g.eval("wasmTextToBinary('(module)').buffer");


assertEq(new Module(code1) instanceof Module, true);
assertEq(new Module(code2) instanceof Module, true);
