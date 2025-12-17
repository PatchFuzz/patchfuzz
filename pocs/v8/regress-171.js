function f(s) { return s.length; }
function g(s, key) { return s[key]; }

print(f(new String("a")), 1);
print(f(new String("a")), 1);
print(f(new String("a")), 1);
print(f("a"), 1);
print(f(new String("a")), 1);

print(g(new String("a"), "length"), 1);
print(g(new String("a"), "length"), 1);
print(g(new String("a"), "length"), 1);
print(g("a", "length"), 1);
print(g(new String("a"), "length"), 1);
