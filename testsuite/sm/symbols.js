

load(libdir + "asserts.js");

var s = new Set;


var sym = Symbol();
s.add(sym);
assertEq(s.has(sym), true);
assertEq(s.has(Symbol()), false);
assertEq([...s][0], sym);
s.add(sym);
assertEq(s.has(sym), true);
assertEq(s.size, 1);
s.delete(sym);
assertEq(s.has(sym), false);
assertEq(s.size, 0);


var str = "how much wood would a woodchuck chuck if a woodchuck could chuck wood";
var s2  = "how much wood would a woodchuck chuck if could";
var arr = str.split(" ").map(Symbol.for);
s = new Set(arr);
assertDeepEq([...s], s2.split(" ").map(Symbol.for));
