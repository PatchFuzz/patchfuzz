var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.evalWithBindings("var i = a*a + b*b; i === 25;", {a: 3, b: 4}).return, true);
    hits++;
};
g.eval("'use strict'; debugger;");
print(hits, 1);
print("i" in g, false);

g.eval("function die() { throw fit; }");
g.eval("Object.defineProperty(this, 'i', {get: die, set: die});");
g.eval("'use strict'; debugger;");
print(hits, 2);
