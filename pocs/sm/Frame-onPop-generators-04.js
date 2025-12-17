;

let g = newGlobal({newCompartment: true});
g.eval("function* f(x) { yield x; }");
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);

let genFrame = null;
dbg.onDebuggerStatement = frame => {
    dbg.onEnterFrame = frame => {
        if (frame.callee == gw.getOwnPropertyDescriptor("f").value) {
            genFrame = frame;
            frame.onPop = completion => null;
        }
    };
    print(frame.eval("f(0);"), null);
};

g.eval("debugger;");

print(genFrame instanceof Debugger.Frame, true);
print(genFrame.onStack, false);
print(() => genFrame.callee, Error);
