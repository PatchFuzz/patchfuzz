function test(which) {
    var g = newGlobal({newCompartment: true});
    g.eval("var line0 = Error().lineNumber;\n" +
           "function f() {\n" +             
           "    return " + which + ";\n" +  
           "}\n");

    var log;
    var scripts = [];
    var handlers = [];
    function addDebugger(g, i) {
        var dbg = Debugger(g);
        dbg.onDebuggerStatement = function (frame) {
            var s = frame.eval("f").return.script;
            scripts[i] = s;
            var offs = s.getLineOffsets(g.line0 + 2);
            var handler = {hit: function (frame) { log += '' + i; } };
            s.setBreakpoint(0, handler);
            handlers[i] = handler;
        };
    }

    var expected = '';
    for (var i = 0; i < 3; i++) {
        addDebugger(g, i);
        if (i !== which)
            expected += '' + i;
    }
    g.eval('debugger;');

    for (var i = 0; i < 3; i++)
        print(scripts[i].getBreakpoints()[0], handlers[i]);

    log = '';
    g.f();
    print(log, '012');

    scripts[which].clearAllBreakpoints();

    log = '';
    g.f();
    print(log, expected);
}

for (var j = 0; j < 3; j++)
    test(j);
