var g = newGlobal({newCompartment: true});
var hits, frame;
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (f) {
    if (hits++ == 0)
        frame = f;
    else
        print(f, frame);
};

hits = 0;
g.evaluate("debugger; debugger;");
print(hits, 2);

hits = 0;
g.evaluate("function f() { debugger; debugger; }  f();");
print(hits, 2);

hits = 0;
g.evaluate("eval('debugger; debugger;');");
print(hits, 2);
