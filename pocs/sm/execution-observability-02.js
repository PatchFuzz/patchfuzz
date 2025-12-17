var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var hits = 0;
dbg.onEnterFrame = function (f) { hits++; };

try {
  g.eval("for (c in (function*() { yield })()) h");
} catch (e) {
}

print(hits, 2);
