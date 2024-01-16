

load(libdir + "asserts.js");

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
    
    assertEq(frame.eval("set = true;"), null);
    assertEq(innerSavedFrame.onStack, false);
    savedFrame = frame;
    return { return: "pass" };
};

savedFrame = undefined;
assertEq(g.eval("debugger;"), "pass");
assertEq(savedFrame.onStack, false);
assertEq(g.set, false);
