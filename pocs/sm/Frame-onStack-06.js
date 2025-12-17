let g = newGlobal({newCompartment: true});
g.eval("function* f() { debugger; }");

let dbg = Debugger(g);
let savedFrame;

dbg.onDebuggerStatement = frame => {
    savedFrame = frame;
    print(frame.callee.name, "f");
    print(frame.onStack, true);
    frame.onPop = function() {
        print(frame.onStack, true);
    };
};
g.f().next();

print(savedFrame.onStack, false);
try {
    savedFrame.older;
    throw new Error("expected exception, none thrown");
} catch (exc) {
    print(exc.message, "Debugger.Frame is not on stack or suspended");
}

