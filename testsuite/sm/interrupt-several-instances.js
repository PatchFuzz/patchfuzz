




load(libdir + "asm.js");

var code = `
    var out = ffi.out;
    function f() {
        out();
    }
    return f;
`;

var ffi = {};
ffi.out = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary('(module (func (export "f") (loop $top (br $top))))'))).exports.f;

timeout(1);
asmLink(asmCompile('glob', 'ffi', USE_ASM + code), this, ffi)();
assertEq(true, false);
