var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var s = undefined, a = []
dbg.onDebuggerStatement = function (frame) {
    if (s === undefined)
        s = frame.script;
    else
        print(s, frame.script);
    print(frame.offset !== undefined, true);
    print(a.indexOf(frame.offset), -1);
    a.push(frame.offset);
};
g.eval("debugger; debugger; debugger;");
print(a.length, 3);
