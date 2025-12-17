var g = newGlobal({newCompartment: true});

var debuggers = [];
var hits = 0;
function attach(g, i) {
    var dbg = Debugger(g);
    dbg.onDebuggerStatement = function (frame) {
        var s = frame.script;
        var offs = s.getLineOffsets(g.line0 + 2);
        var hitAny = false;
        var handler = {
            hit: function (frame) {
                print(this, handler);
                print(frame.script, s);
                var bps = s.getBreakpoints();
                print(bps.length, offs.length);
                for (var i = 0; i < bps.length; i++)
                    print(bps[i], handler);

                if (!hitAny) {
                    hitAny = true;
                    hits++;
                }
            }
        };
        for (var i = 0; i < offs.length; i++)
            s.setBreakpoint(offs[i], handler);
        hits++;
    };
    debuggers[i] = dbg;
}

for (var i = 0; i < 3; i++)
    attach(g, i);
g.done = false;
g.eval("var line0 = Error().lineNumber;\n" +
       "debugger;\n" +      
       "done = true;\n");   
print(hits, 6);
print(g.done, true);
