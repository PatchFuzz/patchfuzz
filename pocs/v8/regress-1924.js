a: break a;
a: b: break a;
a: b: break b;
print("a: break a a", SyntaxError)
print("a: break a 1", SyntaxError)
print("a: break a ''", SyntaxError)
print("a: break a var b", SyntaxError)
print("a: break a {}", SyntaxError)

a: if (0) break a;
b: if (0) {break b;} else {}
c: if (0) break c; else {}
d: if (0) break d; else break d;
