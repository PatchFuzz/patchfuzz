


load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    assertThrowsInstanceOf(function () {
        frame.environment.parent.parent.getVariable("x");
    }, Error);
    hits++;
};
g.eval("Object.defineProperty(this, 'x', {get: function () { throw new Error('fail'); }});\n" +
       "debugger;");
assertEq(hits, 1);
