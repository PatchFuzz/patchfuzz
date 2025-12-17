var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
var savedFrame;
dbg.onEnterFrame = function (frame) {
    hits++;
    savedFrame = frame;
    return undefined;
};

savedFrame = undefined;
print(g.eval("'pass';"), "pass");
print(savedFrame.onStack, false);
print(hits, 1);
