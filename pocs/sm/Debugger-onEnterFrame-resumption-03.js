;

var g = newGlobal({newCompartment: true});
g.set = false;

var dbg = Debugger(g);
var savedFrame;
dbg.onDebuggerStatement = function (frame) {
    var innerSavedFrame;
    dbg.onEnterFrame = function (frame) {
        innerSavedFrame = frame;
        return null;
    };
    
    print(frame.eval("set = true;"), null);
    print(innerSavedFrame.onStack, false);
    savedFrame = frame;
    return { return: "pass" };
};

savedFrame = undefined;
print(g.eval("debugger;"), "pass");
print(savedFrame.onStack, false);
print(g.set, false);
