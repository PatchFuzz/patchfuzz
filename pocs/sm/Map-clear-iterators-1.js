;

var m = new Map();
var it = m[Symbol.iterator]();
m.clear();
print(it, undefined);

m = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
it = m[Symbol.iterator]();
print(it, ["a", 1]);
m.clear();
print(it, undefined);

var log = "";
m = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
for (var [k, v] of m) {
    log += k + v;
    if (k == "b")
        m.clear();
}
print(log, "a1b2");
