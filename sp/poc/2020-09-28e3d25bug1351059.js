




;

var g = newGlobal({newCompartment: true});
g.parent = this;
g.onEnterFrameCalled = false;
g.eval(`
    var dbg = new Debugger(parent);
    dbg.onEnterFrame = frame => {
      onEnterFrameCalled = true;
    };
`);
var i = new WebAssembly.Instance(new WebAssembly.Module(print(`
    (module (func (export "f")))
`)));
i.exports.f();

print(g.onEnterFrameCalled, true);
