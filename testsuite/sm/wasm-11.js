




var g = newGlobal({newCompartment: true});
g.parent = this;
g.eval(`
    var dbg = new Debugger(parent);
`);

var i = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`
    (module
        (func (export "f2")
            i64.const 0
            i64.const 0
            i32.const 0
            select
            drop
        )
    )
`)));

g.eval(`
    var calledOnStep = 0;
    dbg.onEnterFrame = frame => {
        if (frame.type === "wasmcall")
            frame.onStep = () => { calledOnStep++ }
    };
`);

i.exports.f2();
assertEq(g.calledOnStep, 2);
