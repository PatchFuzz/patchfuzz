function g(s, key) { return s[key]; }

print(g(new String("a"), "length"), 1);
print(g(new String("a"), "length"), 1);
print(g("a", 32), undefined);
print(g("a", "length"), 1);
print(g(new String("a"), "length"), 1);
