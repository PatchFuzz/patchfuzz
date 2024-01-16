

load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var rv;
dbg.onDebuggerStatement = function () { throw 15; };
dbg.uncaughtExceptionHook = function (exc) {
    assertEq(exc, 15);
    return rv;
};


rv = undefined;
g.eval("debugger");


rv = {throw: 57};
var result;
assertThrowsValue(function () { g.eval("debugger"); }, 57);


rv = {return: 42};
assertEq(g.eval("debugger;"), 42);
