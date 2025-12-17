var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame1) {
    function hit(frame2) {
        print(frame2, frame1);
        hits++;
    }
    var s = frame1.script;
    var offs = s.getLineOffsets(g.line0 + 2);
    for (var i = 0; i < offs.length; i++)
        s.setBreakpoint(offs[i], {hit: hit});
};
g.eval("var line0 = Error().lineNumber;\n" +
       "debugger;\n" +  
       "x = 1;\n");     
print(hits, 1);
print(g.x, 1);
