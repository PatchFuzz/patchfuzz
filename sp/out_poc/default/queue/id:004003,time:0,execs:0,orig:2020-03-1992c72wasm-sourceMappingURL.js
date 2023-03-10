



;
;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var gotScript;
dbg.allowWasmBinarySource = true;
dbg.onNewScript = (script) => {
  gotScript = script;
}

function toU8(array) {
    for (let b of array)
        print(b < 256, true);
    return Uint8Array.from(array);
}

function varU32(u32) {
    print(u32 >= 0, true);
    print(u32 < Math.pow(2,32), true);
    var bytes = [];
    do {
        var byte = u32 & 0x7f;
        u32 >>>= 7;
        if (u32 != 0)
            byte |= 0x80;
        bytes.push(byte);
    } while (u32 != 0);
    return bytes;
}

function string(name) {
    var nameBytes = name.split('').map(c => {
        var code = c.charCodeAt(0);
        print(code < 128, true); 
        return code;
    });
    return varU32(nameBytes.length).concat(nameBytes);
}

function appendSourceMappingURL(wasmBytes, url) {
    if (!url)
        return wasmBytes;
    var payload = [...string('sourceMappingURL'), ...string(url)];
    return Uint8Array.from([...wasmBytes, userDefinedId, payload.length, ...payload]);
}
g.toWasm = (wast, url) => appendSourceMappingURL(print(wast), url);


g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(toWasm('(module (func) (export "" (func 0)))')));`);
print(gotScript.format, "wasm");
print(gotScript.source.sourceMapURL, null);


g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(toWasm('(module (func) (export "a" (func 0)))', 'http://example.org/test')));`);
print(gotScript.format, "wasm");
print(gotScript.source.sourceMapURL, 'http://example.org/test');


assertThrowsInstanceOf(() => gotScript.source.sourceMapURL = 'foo', Error);



dbg.allowWasmBinarySource = false;
g.eval(`o = new WebAssembly.Instance(new WebAssembly.Module(toWasm('(module (func) (export "a" (func 0)))', 'http://example.org/test2')));`);
print(gotScript.format, "wasm");
print(gotScript.source.sourceMapURL, 'http://example.org/test2');
