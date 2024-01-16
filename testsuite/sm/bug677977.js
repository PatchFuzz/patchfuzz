



var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    var s = frame.eval("f").return.script;
};
function test(s) {
    g.eval("line0 = Error().lineNumber;\n" +
           "debugger;\n" +          
           "function f(i) {\n" +    
           "}\n");
}
test("i = 128;\n" +  "}\n");
var hits = 0;
dbg.onNewScript = function (s) {
    hits++;
};
assertEq(g.eval("eval('2 + 3')"), 5);
this.gczeal(hits, 2);
var fn = g.evaluate("(function (a) { return 5 + a; })");
var g2 = newGlobal({newCompartment: true});
dbg.addDebuggee(g2, dbg);
