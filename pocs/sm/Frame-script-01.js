var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);



function ApplyToFrameScript(code, skip, f) {
    dbg.onDebuggerStatement = function (frame) {
        while (skip-- > 0)
            frame = frame.older;
        print(frame.type, "eval");
        f(frame.script);
    };
    g.eval(code);
}

ApplyToFrameScript('debugger;', 0,
                   function (script) {
                       print(script instanceof Debugger.Script, true);
                   });
ApplyToFrameScript("(function () { eval('debugger;'); })();", 0,
                   function (script) {
                       print(script instanceof Debugger.Script, true);
                   });
