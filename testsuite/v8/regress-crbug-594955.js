



function g(s, key) { return s[key]; }

assertEquals(g(new String("a"), "length"), 1);
assertEquals(g(new String("a"), "length"), 1);
assertEquals(g("a", 32), undefined);
assertEquals(g("a", "length"), 1);
assertEquals(g(new String("a"), "length"), 1);
