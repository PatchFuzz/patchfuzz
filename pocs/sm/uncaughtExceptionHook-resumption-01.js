;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var rv;
dbg.onDebuggerStatement = function () { throw 15; };
dbg.uncaughtExceptionHook = function (exc) {
    print(exc, 15);
    return rv;
};


rv = undefined;
g.eval("debugger");


rv = {throw: 57};
var result;
print(function () { g.eval("debugger"); }, 57);


rv = {return: 42};
print(g.eval("debugger;"), 42);
