var g = newGlobal({newCompartment: true});
g.s = '';
g.eval("var line0 = Error().lineNumber;\n" +
       "function f() {\n" +   
       "    debugger;\n" +  
       "    s += 'x';\n" +  
       "}\n")
var dbg = Debugger(g);
var bp = [];
dbg.onDebuggerStatement = function (frame) {
    g.s += 'D';
    var arr = frame.script.getLineOffsets(g.line0 + 3);
    for (var i = 0; i < arr.length; i++) {
        var obj = {};
        bp[i] = obj;
        frame.script.setBreakpoint(arr[i], obj);
    }
};

g.f();
print(g.s, "Dx");

dbg.onDebuggerStatement = undefined;

for (var i = 0; i < bp.length; i++)
    bp[i].hit = function () { g.s += 'B'; };
g.f();
print(g.s, "DxBx");
