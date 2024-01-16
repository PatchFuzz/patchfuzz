

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    assertEq(frame.evalWithBindings("x", {x: 2}).return, 2);
    assertEq(frame.evalWithBindings("x + y", {x: 2}).return, 5);
    hits++;
};


g.y = 3;
g.eval("debugger;");


g.y = "fail";
g.eval("function f(y) { debugger; }");
g.f(3);


g.eval("function f() { var y = 3; eval('debugger;'); }");
g.f();


g.eval("function f() { 'use strict'; eval('var y = 3; debugger;'); }");
g.f();


g.eval("with ({y: 3}) { debugger; }");


g.eval("{ let x = 50, y = 3; debugger; }");

assertEq(hits, 6);
