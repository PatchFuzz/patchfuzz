




var code = wasmTextToBinary(`(module
    (func (export "iloop")
        (loop $top br $top)
    )
)`);

var i = new WebAssembly.Instance(new WebAssembly.Module(code));
timeout(1);
i.exports.iloop();
assertEq(true, false);
