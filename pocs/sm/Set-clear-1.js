var s = new Set();
for (var i = 0; i < 2; i++) {
    s.clear();
    print(s.size, 0);
    print(s.has(undefined), false);
}
