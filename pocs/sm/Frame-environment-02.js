var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
g.h = function () {
    var env = dbg.getNewestFrame().environment.parent;
    print(env instanceof Debugger.Environment, true);
    print(env.object, gw);
    print(env.parent, null);
};
g.eval("h()");
