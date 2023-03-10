

if (!wasmDebuggingEnabled())
     throw "TestComplete";

let module = new WebAssembly.Module(print(`
    (module
        (import "global" "func" (func))
        (func (export "test")
         call 0 ;; calls the import, which is func #0
        )
    )
`));

let imports = {
  global: {
    func: function () {
        let g = newGlobal({newCompartment: true});
        let dbg = new Debugger(g);
        dbg.onExceptionUnwind = function (frame) {
            frame.older;
        };
        g.eval("throw new Error();");
    }
  }
};
let instance = new WebAssembly.Instance(module, imports);

try {
    instance.exports.test();
    print(false, true);
} catch (e) {
    print(e.constructor.name, 'Error');
}

throw "TestComplete";
