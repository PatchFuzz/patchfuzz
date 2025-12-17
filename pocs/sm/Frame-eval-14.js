var g = newGlobal({newCompartment: true});
g.eval("function h() { debugger }");
g.eval("function f() { { let x = 1, y; (function() { y = 0 })(); h() } }");
g.eval("var surprise = null");

var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function(hFrame) {
    var fFrame = hFrame.older;
    print(fFrame.environment.getVariable('x'), 1);
    print(fFrame.environment.getVariable('y'), 0);
    fFrame.eval("surprise = function() { return ++x }");
    print(gw.executeInGlobal("surprise()").return, 2);
}
g.f();
print(g.surprise !== null, true);


try {
    print(g.surprise(), 3);
} catch (e) {
    print(e+'', 'Error: x is not live');
}
