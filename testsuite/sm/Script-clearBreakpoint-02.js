


var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var log = '';
dbg.onDebuggerStatement = function (frame) {
    var s = frame.script;
    function handler(i) {
        if (i === 1)
            return function () { log += i; s.clearBreakpoint(h[1]); s.clearBreakpoint(h[2]); };
        return function () { log += i; };
    }
    var offs = s.getLineOffsets(g.line0 + 2);
    var h = [];
    for (var i = 0; i < 4; i++) {
        h[i] = {hit: handler(i)};
        for (var j = 0; j < offs.length; j++)
            s.setBreakpoint(offs[j], h[i]);
    }
};

g.eval("var line0 = Error().lineNumber;\n" +
       "debugger;\n" +          
       "result = 'ok';\n");     
assertEq(log, '013');
