var g = newGlobal({newCompartment: true});

g.line0 = undefined;
g.eval("function f() {\n" +
       "    return eval(s);\n" +
       "}\n");
g.s = ("line0 = Error().lineNumber;\n" +
       "debugger;\n" +          
       "result = 'ok';\n");     

var dbg = Debugger(g);
var hits = 0, bphits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.type, 'eval');
    print(frame.script.getBreakpoints().length, 0);
    var h = {hit: function (frame) { bphits++; }};
    var offs = frame.script.getLineOffsets(g.line0 + 2);
    for (var i = 0; i < offs.length; i++)
        frame.script.setBreakpoint(offs[i], h);
    hits++;
};

for (var i = 0; i < 3; i++) {
    print(g.f(), 'ok');
    print(g.result, 'ok');
}
print(hits, 3);
print(bphits, 3);
