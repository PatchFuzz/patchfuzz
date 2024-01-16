

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    function handler(line) {
        return {hit: function (frame) { g.log += "" + line; }};
    }

    var s = frame.eval("f").return.script;
    for (var line = 2; line <= 6; line++) {
        var offs = s.getLineOffsets(g.line0 + line);
        var h = handler(line);
        for (var i = 0; i < offs.length; i++) {
            assertEq(s.getOffsetLocation(offs[i]).lineNumber, g.line0 + line);
            s.setBreakpoint(offs[i], h);
        }
    }
};

g.log = '';
g.eval("var line0 = Error().lineNumber;\n" +
       "function f(n) {\n" +        
       "    for (var i = 0;\n" +    
       "         i < n;\n" +        
       "         i++)\n" +          
       "        log += '.';\n" +    
       "    log += '!';\n" +        
       "}\n" +
       "debugger;\n");
assertEq(g.log, "");
g.f(3);
assertEq(g.log, "235.435.435.436!");
