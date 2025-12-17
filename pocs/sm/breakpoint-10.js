var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var fscript = null;
dbg.onNewScript = function(script) {
    dbg.onNewScript = undefined;
    fscript = script.getChildScripts()[0];
}

g.eval("function f(x) { arguments[0] = 3; return x }");
print(fscript !== null, true);

fscript.setBreakpoint(0, {hit:function(frame) {
    print(frame.eval('x').return, 1);
    print(frame.arguments[0], 1);
    return {return:42};
}});

print(g.f(1), 42);
