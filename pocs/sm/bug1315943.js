var s = "{}";
for (var i = 0; i < 21; i++) s += s;
var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function(frame) {
    var s = frame.eval("f").return.script;
};
g.eval("line0 = Error().lineNumber;\n" + "debugger;\n" + 
    "function f(i) {\n" + 
    s + 
    "}\n");
