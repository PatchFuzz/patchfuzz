var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits;
var a = [];
dbg.onDebuggerStatement = function (frame) {
    for (var i = 0; i < a.length; i++) 
        print(a[i] === frame, false);
    a.push(frame);
    hits++;
};

g.eval("function f() { debugger; }");
g.eval("function h() { debugger; f(); }");
hits = 0;
g.eval("for (var i = 0; i < 4; i++) h();");
print(hits, 8);
