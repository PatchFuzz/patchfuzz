var g = newGlobal({newCompartment: true});
g.line0 = null;
var dbg = Debugger(g);
var where;
dbg.onDebuggerStatement = function (frame) {
    var s = frame.eval("f").return.script;
    var lineno = g.line0 + where;
    var offs = s.getLineOffsets(lineno);
    for (var i = 0; i < offs.length; i++) {
        print(s.getOffsetLocation(offs[i]).lineNumber, lineno);
        s.setBreakpoint(offs[i], {hit: function () { g.log += 'B'; }});
    }
    g.log += 'A';
};

function test(s) {
    var count = (s.split(/\n/).length - 1); 
    g.log = '';
    where = 3 + count + 1;
    g.eval("line0 = Error().lineNumber;\n" +
           "debugger;\n" +          
           "function f(i) {\n" +    
           s +                      
           "    log += '?';\n" +    
           "    log += '!';\n" +    
           "}\n");
    g.f(0);
    print(g.log, 'A?B!');
}

test("i = 128;\n" +
     "for (;;) {\n" +
     "    var x = i - 10;;\n" +
     "    if (x < 0)\n" +
     "        break;\n" +
     "    i >>= 2;\n" +
     "}\n");

test("while (true)\n" +
     "    if (++i === 2) break;\n");

test("do {\n" +
     "    if (++i === 2) break;\n" +
     "} while (true);\n");

test("switch (i) {\n" +
     "  case 2: return 7;\n" +
     "  case 1: return 8;\n" +
     "  case 0: break;\n" +
     "  default: return -i;\n" +
     "}\n");
