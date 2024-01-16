


























function f(s) { return s.length; }
function g(s, key) { return s[key]; }

assertEquals(f(new String("a")), 1);
assertEquals(f(new String("a")), 1);
assertEquals(f(new String("a")), 1);
assertEquals(f("a"), 1);
assertEquals(f(new String("a")), 1);

assertEquals(g(new String("a"), "length"), 1);
assertEquals(g(new String("a"), "length"), 1);
assertEquals(g(new String("a"), "length"), 1);
assertEquals(g("a", "length"), 1);
assertEquals(g(new String("a"), "length"), 1);
