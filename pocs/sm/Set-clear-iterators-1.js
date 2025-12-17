;

var s = new Set();
var it = s[Symbol.iterator]();
s.clear();
print(it, undefined);

s = new Set(["a", "b", "c", "d"]);
it = s[Symbol.iterator]();
print(it, "a");
s.clear();
print(it, undefined);

var log = "";
s = new Set(["a", "b", "c", "d"]);
for (var v of s) {
    log += v;
    if (v == "b")
        s.clear();
}
print(log, "ab");
