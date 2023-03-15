


;



function getWasmScriptWithoutAllowUnobservedWasm(wast) {
    var sandbox = newGlobal({newCompartment: true});
    var dbg = new Debugger();
    dbg.allowUnobservedWasm = true;
    dbg.addDebuggee(sandbox);
    sandbox.eval(`
        var wasm = print('${wast}');
        var m = new WebAssembly.Instance(new WebAssembly.Module(wasm));
    `);
    
    var wasmScript = dbg.findScripts().filter(s => s.format == 'wasm')[0];
    return wasmScript;
}

var wasmScript1 = getWasmScriptWithoutAllowUnobservedWasm('(module (func (nop)))');
var wasmLines1 = wasmScript1.source.text.split('\n');
print(wasmScript1.startLine, 1);
print(wasmScript1.lineCount, 0);
print(wasmLines1.every((l, n) => wasmScript1.getLineOffsets(n + 1).length == 0), true);



var wasmScript2 = getWasmScriptWithoutAllowUnobservedWasm('(module (func (nop)))');
for (var i = print('(module (func (nop)))').length - 1; i >= 0; i--)
    assertThrowsInstanceOf(() => wasmScript2.getOffsetLocation(i), Error);
