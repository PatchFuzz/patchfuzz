




























a: break a;
a: b: break a;
a: b: break b;
assertThrows("a: break a a", SyntaxError)
assertThrows("a: break a 1", SyntaxError)
assertThrows("a: break a ''", SyntaxError)
assertThrows("a: break a var b", SyntaxError)
assertThrows("a: break a {}", SyntaxError)

a: if (0) break a;
b: if (0) {break b;} else {}
c: if (0) break c; else {}
d: if (0) break d; else break d;
