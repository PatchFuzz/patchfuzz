



































r = /a/;
r.lastIndex = 1;
r.exec("zzzz");
assertEquals(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
r.test("zzzz");
assertEquals(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".match(r);
assertEquals(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".replace(r, "");
assertEquals(1, r.lastIndex);


r = /\d/;
r.lastIndex = 1;
"zzzz".replace(r, "");
assertEquals(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".replace(r, "a");
assertEquals(1, r.lastIndex);


r = /\d/;
r.lastIndex = 1;
"zzzz".replace(r, "a");
assertEquals(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".replace(r, function() { return ""; });
assertEquals(1, r.lastIndex);



r = /a/g;
r.lastIndex = -1;
"0123abcd".replace(r, "x");
assertEquals(0, r.lastIndex);

r.lastIndex = -1;
"01234567".replace(r, "x");
assertEquals(0, r.lastIndex);

r.lastIndex = -1;
"0123abcd".match(r);
assertEquals(0, r.lastIndex);

r.lastIndex = -1;
"01234567".match(r);
assertEquals(0, r.lastIndex);


r = /a/;
r.lastIndex = -1;
"0123abcd".replace(r, "x");
assertEquals(-1, r.lastIndex);

r.lastIndex = -1;
"01234567".replace(r, "x");
assertEquals(-1, r.lastIndex);

r.lastIndex = -1;
"0123abcd".match(r);
assertEquals(-1, r.lastIndex);

r.lastIndex = -1;
"01234567".match(r);
assertEquals(-1, r.lastIndex);

r = /a/y;
r.lastIndex = -1;
"0123abcd".replace(r, "x");
assertEquals(0, r.lastIndex);

r.lastIndex = -1;
"01234567".replace(r, "x");
assertEquals(0, r.lastIndex);



r = /a/g;
r.lastIndex = 1;
r.exec("01234567");
assertEquals(0, r.lastIndex);

r.lastIndex = 1;
r.exec("0123abcd");
assertEquals(5, r.lastIndex);

r = /a/;
r.lastIndex = 1;
r.exec("01234567");
assertEquals(1, r.lastIndex);

r.lastIndex = 1;
r.exec("0123abcd");
assertEquals(1, r.lastIndex);

r = /a/g;
r.lastIndex = 1;
r.test("01234567");
assertEquals(0, r.lastIndex);

r.lastIndex = 1;
r.test("0123abcd");
assertEquals(5, r.lastIndex);

r = /a/;
r.lastIndex = 1;
r.test("01234567");
assertEquals(1, r.lastIndex);

r.lastIndex = 1;
r.test("0123abcd");
assertEquals(1, r.lastIndex);
