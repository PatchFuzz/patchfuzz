;

var s = new Set;


var sym = Symbol();
s.add(sym);
print(s.has(sym), true);
print(s.has(Symbol()), false);
print([...s][0], sym);
s.add(sym);
print(s.has(sym), true);
print(s.size, 1);
s.delete(sym);
print(s.has(sym), false);
print(s.size, 0);


var str = "how much wood would a woodchuck chuck if a woodchuck could chuck wood";
var s2  = "how much wood would a woodchuck chuck if could";
var arr = str.split(" ").map(Symbol.for);
s = new Set(arr);
print([...s], s2.split(" ").map(Symbol.for));
