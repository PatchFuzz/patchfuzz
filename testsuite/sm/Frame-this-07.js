


var g = newGlobal({newCompartment: true});
g.eval("x = 4");
g.eval("var foo = function() { return () => 1; }; var arrow = foo.call(3);");
var dbg = new Debugger(g);
var log = "";
dbg.onEnterFrame = function (frame) {
    if (frame.type === "eval")
	return;
    assertEq(frame.type, "call");
    assertEq(frame.this.optimizedOut, true);
    frame.eval("try { print(this.x); } catch(e) { exc = e; }");
    assertEq(typeof g.exc, "object");
    log += "d";
};
g.eval("arrow();");
assertEq(log, "d");
