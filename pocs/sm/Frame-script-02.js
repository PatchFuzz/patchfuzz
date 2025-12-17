var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);



function ApplyToFrameScript(code, skip, f) {
    dbg.onDebuggerStatement = function (frame) {
        while (skip-- > 0)
            frame = frame.older;
        print(frame.type, "call");
        f(frame.script);
    };
    g.eval(code);
}

ApplyToFrameScript('(function () { debugger; })();', 0,
                   function (script) {
                       print(script instanceof Debugger.Script, true);
                   });






