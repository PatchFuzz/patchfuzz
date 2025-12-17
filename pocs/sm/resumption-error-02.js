var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var rv;
dbg.onDebuggerStatement = stack => rv;
dbg.uncaughtExceptionHook = function (exc) {
    print(exc, "BANG");
    return {return: "recovered"};
};

rv = {get throw() { throw "BANG"; }};
print(g.eval("debugger; false;"), "recovered");

rv = new Proxy({}, {has() { throw "BANG"; }});
print(g.eval("debugger; false;"), "recovered");
