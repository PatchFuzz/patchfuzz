function* hexData(n) {
    for (var i = 0; i < n; i++)
        yield i.toString(16);
}

var s = new Set(hexData(256));
print(s.size, 256);
print(s.has("0"), true);
print(s.has(0), false);
print(s.has("ff"), true);
