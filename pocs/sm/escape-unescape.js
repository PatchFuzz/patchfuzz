s = "a%2b%20def%00A0";
res = unescape(s);
print(res, "a+ def\x00A0");
print(isLatin1(res), true);

s = "a%2b%20def%00A0%u1200";
print(unescape(s), "a+ def\x00A0\u1200");


s += "\u1200";
print(unescape(s), "a+ def\x00A0\u1200\u1200");


s = "abc \u00ff";
res = escape(s);
print(res, "abc%20%FF");
print(isLatin1(res), true);


s += "\u1200";
res = escape(s);
print(res, "abc%20%FF%u1200");
print(isLatin1(res), true);
