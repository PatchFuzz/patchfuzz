;

function test(when, what) {
    let g = newGlobal({newCompartment: true});
    g.eval("function* f(x) { yield x; }");

    let dbg = new Debugger;
    let gw = dbg.addDebuggee(g);
    let fw = gw.getOwnPropertyDescriptor("f").value;

    let t = 0;
    let poppedFrame;

    function tick(frame) {
        if (frame.callee == fw) {
            if (t == when) {
                poppedFrame = frame;
                dbg.onEnterFrame = undefined;
                frame.onPop = undefined;
                return what;
            }
            t++;
        }
        return undefined;
    }

    dbg.onDebuggerStatement = frame => {
        dbg.onEnterFrame = frame => {
            frame.onPop = function() {
                return tick(this);
            };
            return tick(frame);
        };
        let result = frame.eval("for (let _ of f(0)) {}");
        if (result && "stack" in result) {
          result.stack = true;
        }
        print(result, what);
    };
    g.eval("debugger;");

    print(t, when);
    print(poppedFrame.onStack, false);
    print(() => poppedFrame.older,
                       Error,
                       "Debugger.Frame is not on stack or suspended");
}

for (let when = 0; when < 6; when++) {
    for (let what of [null, {throw: "fit", stack: true}]) {
        test(when, what);
    }
}

