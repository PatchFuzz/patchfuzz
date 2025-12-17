gczeal(2,10);
var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onNewScript = function(script) {
    fscript = script.getChildScripts()[0];
}
g.eval("function f(x) { arguments[0] = 3; return x }");
fscript.setBreakpoint(0, {hit:function(frame) {
    print(frame.eval('x').return, 1);
    gc();
    return {return:42};
}});
print(g.f(1), 42);
