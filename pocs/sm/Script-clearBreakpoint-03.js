var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var s;
dbg.onDebuggerStatement = function (frame) {
    s = frame.eval("f").return.script;
};
g.eval("var line0 = Error().lineNumber;\n" +
       "function f(a, b) {\n" +     
       "    return a + b;\n" +      
       "}\n" +
       "debugger;\n");

var hits = 0;
var handler = {hit: function (frame) { hits++; s.clearBreakpoint(handler); }};
var offs = s.getLineOffsets(g.line0 + 2);
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < offs.length; j++)
        s.setBreakpoint(offs[j], handler);
}

print(g.f(2, 2), 4);
print(hits, 1);
print(s.getBreakpoints().length, 0);
