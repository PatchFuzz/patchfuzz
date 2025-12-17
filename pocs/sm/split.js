var s = "abcdef,g,,";
var res = s.split(",");
print(res[0], "abcdef");
print(isLatin1(res[0]), true);
print(res[1], "g");
print(res[2], "");
print(res[3], "");

s = "abcdef,gh,,";
res = s.split("\u1200");
print(res[0], "abcdef,gh,,");
print(isLatin1(res[0]), true);


s = "abcdef\u1200\u1200,g,,";
res = s.split(",");
print(res[0], "abcdef\u1200\u1200");
print(isLatin1(res[0]), false);
print(res[1], "g");
print(res[2], "");
print(res[3], "");

res = s.split("\u1200");
print(res[0], "abcdef");
print(res[1], "");
print(res[2], ",g,,");
