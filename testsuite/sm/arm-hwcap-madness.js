






assertEq(typeof WebAssembly, "object");

try {
    var i = new WebAssembly.Instance(
        new WebAssembly.Module(
            wasmTextToBinary('(module (func (export "") (result i32) (i32.const 42)))')));
    assertEq(i.exports[""](), 42);
} catch (e) {
    if (String(e).match(/no WebAssembly compiler available/)) {
        switch (wasmCompileMode()) {
        case "none":
            
            
            break;
        default:
            
            
            throw e;
        }
    } else {
        
        throw e;
    }
}
