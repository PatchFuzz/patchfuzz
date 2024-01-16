
var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var evalThis, frameThis;
dbg.onEnterFrame = function (frame) {
    if (frame.type === "eval")
	return;
    assertEq(frame.type, "call");
    evalThis = frame.eval("this");
    frameThis = frame.this;
};


g.eval("var foo = function() { 'use strict'; }; foo.call(33);");
assertEq(evalThis.return, 33);
assertEq(frameThis, 33);


g.eval("var bar = function() { }; bar.call(22);");
assertEq(typeof evalThis.return, "object");
assertEq(evalThis.return.unsafeDereference().valueOf(), 22);
assertEq(frameThis.unsafeDereference().valueOf(), 22);
