

function testIt(s, addr) {
    try {
        var ins = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`
(module
  (memory (export "mem") i64 65537)
  (data (i64.const ${addr}) "${s}"))`)));
    } catch (e) {
        if (e instanceof WebAssembly.RuntimeError && String(e).match(/too many memory pages/)) {
            return;
        }
        throw e;
    }
    var mem = new Uint8Array(ins.exports.mem.buffer);
    assertEq(String.fromCodePoint(...mem.slice(addr, addr + s.length)), s)
}


testIt("hello, world!", 0x100000020);


var s = "supercalifragilisticexpialidocious";
testIt(s, 0x100000000 - Math.floor(s.length / 2));



assertErrorMessage(() => new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`
(module
  (memory (export "mem") i64 65537)
  (data (i64.const ${65536*65537-10}) "supercalifragilisticexpialidocious"))`))),
                   WebAssembly.RuntimeError,
                   /(out of bounds)|(too many memory pages)/);

