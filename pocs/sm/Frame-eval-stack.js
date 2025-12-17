var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval("function h() { debugger; }");
g.eval("function g() { h() }");
g.eval("function f() { var blah = 333; g() }");

dbg.onDebuggerStatement = function(frame) {
    frame = frame.older;
    g.trace = frame.older.eval("(new Error()).stack;").return;
}
g.f();

print(typeof g.trace, "string");

var frames = g.trace.split("\n");
print(frames[0].includes("eval code"), true);
print(frames[1].startsWith("f@"), true);
print(frames[2].startsWith("@"), true);
