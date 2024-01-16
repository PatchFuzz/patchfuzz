




newGlobal({newCompartment: true}).Debugger().addDebuggee(this);

var t = new WebAssembly.Table({
    initial: 1,
    element: "anyfunc"
});

new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`
(module
    (import "imports" "t" (table 1 funcref))
    (func $iloop loop $top br $top end)
    (elem (i32.const 0) $iloop))
`)), { imports: { t } });

outer = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`
(module
    (import "imports" "t" (table 1 funcref))
    (type $v2v (func))
    (func (export "run")
        i32.const 0
        call_indirect (type $v2v))
    )`)), { imports: { t } });

setJitCompilerOption('simulator.always-interrupt', 1);
timeout(1);
outer.exports.run();
