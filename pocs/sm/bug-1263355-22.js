var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onEnterFrame = function(f) {
    (f.environment.getVariable("e") == 0);
};
g.eval("" + function f() {
    try {
        throw 42;
    } catch (e) {
        noSuchFn(e);
    }
});
g.eval("f();");
