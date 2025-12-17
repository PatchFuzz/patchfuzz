var g = newGlobal({newCompartment: true});
g.eval("x = 4");
g.eval("var foo = function() { 'use strict'; return () => this; }; var arrow = foo.call(3);");
var dbg = new Debugger(g);
var hits = 0;
dbg.onEnterFrame = function (frame) {
    if (frame.type === "eval")
	return;
    hits++;
    print(frame.type, "call");
    print(frame.this, 3);
    print(frame.eval("this + 1").return, 4);
};
g.eval("arrow();");
print(hits, 1);
