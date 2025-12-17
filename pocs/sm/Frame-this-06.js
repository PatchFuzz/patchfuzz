var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var evalThis, frameThis;
dbg.onEnterFrame = function (frame) {
    if (frame.type === "eval")
	return;
    print(frame.type, "call");
    evalThis = frame.eval("this");
    frameThis = frame.this;
};


g.eval("var foo = function() { 'use strict'; }; foo.call(33);");
print(evalThis.return, 33);
print(frameThis, 33);


g.eval("var bar = function() { }; bar.call(22);");
print(typeof evalThis.return, "object");
print(evalThis.return.unsafeDereference().valueOf(), 22);
print(frameThis.unsafeDereference().valueOf(), 22);
