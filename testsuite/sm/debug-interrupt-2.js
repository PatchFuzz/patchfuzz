










setJitCompilerOption("ion.warmup.trigger", 30);

var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("Debugger(parent).onEnterFrame = function() {};");
timeout(0.01);
var code = wasmTextToBinary(`(module
    (func $f2
        loop $top
            br $top
        end
    )
    (func (export "f1")
        call $f2
    )
)`);
new WebAssembly.Instance(new WebAssembly.Module(code)).exports.f1();
