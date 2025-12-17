var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.evalWithBindings("for (i = 0; i < 5; i++) {}  i;", {i: 10}).return, 5);
    hits++;
};

g.eval("debugger;");
print("i" in g, false);
print(hits, 1);
