var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var log = '';
dbg.onDebuggerStatement = function (frame) {
    log += 'D';
    function handler(i) {
        return {hit: function (frame) { log += '' + i; }};
    }
    var f = frame.eval("f").return;
    var s = f.script;
    var offs = s.getLineOffsets(g.line0 + 2);
    for (var i = 0; i < 10; i++) {
        var bp = handler(i);
        for (var j = 0; j < offs.length; j++)
            s.setBreakpoint(offs[j], bp);
    }
    print(f.call().return, 42);
    log += 'X';
};

g.eval("var line0 = Error().lineNumber;\n" +
       "function f() {\n" +  
       "    return 42;\n" +  
       "}\n" +
       "debugger;\n");
print(log, 'D0123456789X');
