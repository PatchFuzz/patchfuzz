


newGlobal({ sameCompartmentAs: this });
nukeAllCCWs();

var g = newGlobal({
    newCompartment: true
});
var dbg = Debugger();
gw = dbg.addDebuggee(g);
g.eval("" + function fib() {});
gw.makeDebuggeeValue(g.fib).script.setBreakpoint(0, {});
