

var g = newGlobal({newCompartment: true});
g.line0 = null;
var dbg = Debugger(g);
var where;
dbg.onDebuggerStatement = function (frame) {
    var s = frame.script, lineno, offs;

    lineno = g.line0 + where;
    offs = s.getLineOffsets(lineno);
    for (var i = 0; i < offs.length; i++) {
        assertEq(s.getOffsetLocation(offs[i]).lineNumber, lineno);
        s.setBreakpoint(offs[i], {hit: function () { g.log += 'B'; }});
    }

    lineno++;
    offs = s.getLineOffsets(lineno);
    for (var i = 0; i < offs.length; i++) {
        assertEq(s.getOffsetLocation(offs[i]).lineNumber, lineno);
        s.setBreakpoint(offs[i], {hit: function () { g.log += 'C'; }});
    }

    g.log += 'A';
};

function test(s) {
    assertEq(s.charAt(s.length - 1), '\n');
    var count = (s.split(/\n/).length - 1); 
    g.log = '';
    where = 1 + count;
    g.eval("line0 = Error().lineNumber;\n" +
           "debugger;\n" +          
           s +                      
           "log += 'D';\n");
    assertEq(g.log, 'AB!CD');
}


g.i = 0;
test("if (i === 0)\n" +
     "    log += '!'; else log += 'X';\n");
test("if (i === 2)\n" +
     "    log += 'X'; else log += '!';\n");


g.i = 2;
test("while (1) {\n" +
     "    if (i === 2) break;\n" +
     "    log += 'X'; } log += '!';\n");


g.i = 0;
test("while (i > 0) {\n" +
     "    if (i === 70) log += 'X';\n" +
     "    --i;  } log += '!';\n");


g.i = 0;
test("switch (i) {\n" +
     "    case 0: case 1: log += '!'; break; }\n");
test("switch ('' + i) {\n" +
     "    case '0': case '1': log += '!'; break; }\n");
test("switch (i) {\n" +
     "    case 'ok' + i: case i - i: log += '!'; break; }\n");
