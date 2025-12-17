var g = newGlobal({newCompartment: true});
g.eval("var line0 = Error().lineNumber;\n" +
       "function f() {\n" +     
       "    return 2;\n" +      
       "}\n");

var N = 4;
var hits = 0;
for (var i = 0; i < N; i++) {
    var dbg = Debugger(g);
    dbg.onDebuggerStatement = function (frame) {
        var handler = {hit: function () { hits++; }};
        var s = frame.eval("f").return.script;
        var offs = s.getLineOffsets(g.line0 + 2);
        for (var j = 0; j < offs.length; j++)
            s.setBreakpoint(offs[j], handler);
    };
    g.eval('debugger;');
    dbg.onDebuggerStatement = undefined;
    dbg = null;
}

gc();

print(g.f(), 2);
print(hits, N);
