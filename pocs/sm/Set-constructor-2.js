var s = new Set([]);
print(s.size, 0);
print(s.has(undefined), false);

s = new Set(["one", "two", "three"]);
print(s.size, 3);
print(s.has("one"), true);
print(s.has("eleventeen"), false);

var a = [{}, {}, {}];
s = new Set(a);
print(s.size, 3);
for (let obj of a)
    print(s.has(obj), true);
print(s.has({}), false);
print(s.has("three"), false);
