


var g = newGlobal({newCompartment: true});
g.eval("function h() { debugger }");
g.eval("function f() { { let x = 1, y; (function() { y = 0 })(); h() } }");
g.eval("var surprise = null");

var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function(hFrame) {
    var fFrame = hFrame.older;
    assertEq(fFrame.environment.getVariable('x'), 1);
    assertEq(fFrame.environment.getVariable('y'), 0);
    fFrame.eval("surprise = function() { return ++x }");
    assertEq(gw.executeInGlobal("surprise()").return, 2);
}
g.f();
assertEq(g.surprise !== null, true);


try {
    assertEq(g.surprise(), 3);
} catch (e) {
    assertEq(e+'', 'Error: x is not live');
}
