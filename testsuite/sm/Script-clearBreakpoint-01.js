

var g = newGlobal({newCompartment: true});
var bphits = 0;
var handler = {hit: function (frame) { frame.script.clearBreakpoint(this); bphits++; }};
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var offs = frame.script.getLineOffsets(g.line0 + 3);
    for (var i = 0; i < offs.length; i++)
        frame.script.setBreakpoint(offs[i], handler);
    hits++;
};
g.eval("var line0 = Error().lineNumber;\n" +
       "debugger;\n" +                    
       "for (var i = 0; i < 4; i++)\n" +  
       "    result = 'ok';\n");           
assertEq(hits, 1);
assertEq(bphits, 1);
