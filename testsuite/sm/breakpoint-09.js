



var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
g.eval("function f() { return eval('2+2'); }");
var s;
dbg.onNewScript = function (script) { s = script; };
g.f();
for (var offset of s.getLineOffsets(s.startLine))
    s.setBreakpoint(offset, {hit: function () {}});
assertEq(g.f(), 4);
