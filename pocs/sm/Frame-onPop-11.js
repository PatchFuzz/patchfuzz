var g = newGlobal({newCompartment: true});
g.eval("function f(){ return 'to normalcy'; }");
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var log;


var gf = gw.makeDebuggeeValue(g.f);
var fStartOffset = gf.script.getLineOffsets(gf.script.startLine)[0];
gf.script.setBreakpoint(fStartOffset, {
    hit: function handleHit(frame) {
        log += 'b';
        frame.onPop = function handlePop(c) {
            log += ')';
            print(c.return, "to normalcy");
        };
    }
});

log = "";
print(g.f(), "to normalcy");
print(log, "b)");
