










setJitCompilerOption("ion.warmup.trigger", 30);

var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("Debugger(parent).onEnterFrame = function() {};");
timeout(0.01);
var code = wasmTextToBinary(`(module
    (func (export "f1")
        (loop $top br $top)
    )
)`);
new WebAssembly.Instance(new WebAssembly.Module(code)).exports.f1();
