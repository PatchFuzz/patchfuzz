var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    function hit(frame) {
        frame.older.eval("q += 16");
    }

    var s = frame.script;
    var offs = s.getLineOffsets(g.line0 + 9);
    for (var i = 0; i < offs.length; i++)
        s.setBreakpoint(offs[i], {hit: hit});
};

g.eval("line0 = Error().lineNumber;\n" +
       "function* g(x) {\n" +   
       "    var q = 10;\n" +    
       "    yield* x;\n" +      
       "    return q;\n" +      
       "}\n" +                  
       "function* range(n) {\n" + 
       "    debugger;\n" +      
       "    for (var i = 0; i < n; i++)\n" + 
       "        yield i;\n" +   
       "    return;\n" + 
       "}");

g.eval("var iter = g(range(2))");
g.eval("var first = iter.next().value");
g.eval("var second = iter.next().value");
g.eval("var third = iter.next().value");

print(g.first, 0);
print(g.second, 1);
print(g.third, 42);
