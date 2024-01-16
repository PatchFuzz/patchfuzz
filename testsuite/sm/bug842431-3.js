




var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval('function f() { try { var y; throw 123; } catch(e) { assertEq(0, 1); } }');

dbg.onExceptionUnwind = function(frame) {
    frame.onPop = function() {
	return {throw: 321};
    }

    return {return: 11};
};

try {
    g.f();
    assertEq(0, 1);
} catch(e) {
    assertEq(e.toString().includes("321"), true);
}
