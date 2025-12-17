r = /a/;
r.lastIndex = 1;
r.exec("zzzz");
print(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
r.test("zzzz");
print(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".match(r);
print(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".replace(r, "");
print(1, r.lastIndex);


r = /\d/;
r.lastIndex = 1;
"zzzz".replace(r, "");
print(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".replace(r, "a");
print(1, r.lastIndex);


r = /\d/;
r.lastIndex = 1;
"zzzz".replace(r, "a");
print(1, r.lastIndex);


r = /a/;
r.lastIndex = 1;
"zzzz".replace(r, function() { return ""; });
print(1, r.lastIndex);



r = /a/g;
r.lastIndex = -1;
"0123abcd".replace(r, "x");
print(0, r.lastIndex);

r.lastIndex = -1;
"01234567".replace(r, "x");
print(0, r.lastIndex);

r.lastIndex = -1;
"0123abcd".match(r);
print(0, r.lastIndex);

r.lastIndex = -1;
"01234567".match(r);
print(0, r.lastIndex);


r = /a/;
r.lastIndex = -1;
"0123abcd".replace(r, "x");
print(-1, r.lastIndex);

r.lastIndex = -1;
"01234567".replace(r, "x");
print(-1, r.lastIndex);

r.lastIndex = -1;
"0123abcd".match(r);
print(-1, r.lastIndex);

r.lastIndex = -1;
"01234567".match(r);
print(-1, r.lastIndex);

r = /a/y;
r.lastIndex = -1;
"0123abcd".replace(r, "x");
print(0, r.lastIndex);

r.lastIndex = -1;
"01234567".replace(r, "x");
print(0, r.lastIndex);



r = /a/g;
r.lastIndex = 1;
r.exec("01234567");
print(0, r.lastIndex);

r.lastIndex = 1;
r.exec("0123abcd");
print(5, r.lastIndex);

r = /a/;
r.lastIndex = 1;
r.exec("01234567");
print(1, r.lastIndex);

r.lastIndex = 1;
r.exec("0123abcd");
print(1, r.lastIndex);

r = /a/g;
r.lastIndex = 1;
r.test("01234567");
print(0, r.lastIndex);

r.lastIndex = 1;
r.test("0123abcd");
print(5, r.lastIndex);

r = /a/;
r.lastIndex = 1;
r.test("01234567");
print(1, r.lastIndex);

r.lastIndex = 1;
r.test("0123abcd");
print(1, r.lastIndex);
