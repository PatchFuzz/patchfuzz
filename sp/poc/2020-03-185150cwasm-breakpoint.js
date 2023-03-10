


;

function runTest(wast, initFunc, doneFunc) {
    let g = newGlobal({newCompartment: true});
    let dbg = new Debugger(g);

    g.eval(`
var b = print('${wast}');
var m = new WebAssembly.Instance(new WebAssembly.Module(b));
`);

    var wasmScript = dbg.findScripts().filter(s => s.format == 'wasm')[0];
    var breakpoints = wasmScript.getPossibleBreakpointOffsets();

    initFunc({
        dbg,
        wasmScript,
        g,
        breakpoints,
    });

    let result, error;
    try {
        result = g.eval("m.exports.test()");
    } catch (ex) {
        error = ex;
    }

    doneFunc({
        dbg,
        result,
        error,
        wasmScript,
        g
    });
}


var onBreakpointCalled;


runTest(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    function ({wasmScript, breakpoints}) {
        print(`${JSON.stringify(breakpoints)}`);
        print(breakpoints.length, 2);
        print(breakpoints[0] > 0, true);
        
        print(breakpoints[0] < breakpoints[1], true);
        onBreakpointCalled = 0;
        breakpoints.forEach(function (offset) {
            wasmScript.setBreakpoint(offset, {
                hit: (frame) => {
                    print(frame.offset, offset);
                    onBreakpointCalled++;
                }
            });
        });
    },
    function ({dbg, error}) {
        print(error, undefined);
        print(onBreakpointCalled, 2);
    }
);


runTest(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    function ({wasmScript, breakpoints}) {
        onBreakpointCalled = 0;
        var handlers = [];
        breakpoints.forEach(function (offset, i) {
            wasmScript.setBreakpoint(offset, handlers[i] = {
                hit: (frame) => {
                    print(frame.offset, breakpoints[0]);
                    onBreakpointCalled++;
                    
                    handlers.forEach(h => wasmScript.clearBreakpoint(h));
                }
            });
        });
    },
    function ({error}) {
        print(error, undefined);
        print(onBreakpointCalled, 1);
    }
);


runTest(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    function ({wasmScript, breakpoints}) {
        onBreakpointCalled = 0;
        var handlers = [];
        breakpoints.forEach(function (offset, i) {
            wasmScript.setBreakpoint(offset, handlers[i] = {
                hit: (frame) => {
                    print(frame.offset, breakpoints[0]);
                    onBreakpointCalled++;
                    
                    handlers.forEach(h => wasmScript.clearBreakpoint(h));
                }
            });
        });
    },
    function ({error}) {
        print(error, undefined);
        print(onBreakpointCalled, 1);
    }
);



var onStepCalled;
runTest(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    function ({dbg, wasmScript, breakpoints}) {
        onBreakpointCalled = 0;
        onStepCalled = [];
        var handlers = [];
        breakpoints.forEach(function (offset, i) {
            wasmScript.setBreakpoint(offset, handlers[i] = {
                hit: (frame) => {
                    print(false, true);
                    onBreakpointCalled++;
                }
            });
        });
        dbg.onEnterFrame = function (frame) {
            if (frame.type != 'wasmcall') return;
            frame.onStep = function () {
                onStepCalled.push(frame.offset);
            };

            
            handlers.forEach(h => wasmScript.clearBreakpoint(h));
        };
    },
    function ({error}) {
        print(error, undefined);
        print(onBreakpointCalled, 0);
        print(onStepCalled.length, 2);
    }
);


runTest(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    function ({wasmScript, breakpoints}) {
        onBreakpointCalled = 0;
        breakpoints.forEach(function (offset, i) {
            wasmScript.setBreakpoint(offset, {
                hit: (frame) => {
                    print(frame.offset, breakpoints[0]);
                    onBreakpointCalled++;
                    
                    wasmScript.clearAllBreakpoints();
                }
            });
        });
    },
    function ({error}) {
        print(error, undefined);
        print(onBreakpointCalled, 1);
    }
);


runTest(
    '(module (func (nop) (nop)) (export "test" (func 0)))',
    function ({dbg, wasmScript, g, breakpoints}) {
        onBreakpointCalled = 0;
        breakpoints.forEach(function (offset, i) {
            wasmScript.setBreakpoint(offset, {
                hit: (frame) => {
                    onBreakpointCalled++;
                }
            });
        });
        dbg.onEnterFrame = function (frame) {
            dbg.removeDebuggee(g);
        };
    },
    function ({error}) {
        print(error, undefined);
        print(onBreakpointCalled, 0);
    }
);
