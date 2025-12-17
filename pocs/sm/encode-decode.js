s = "a%2b%20def%00A0";

res = decodeURI(s);
print(res, "a%2b def\x00A0");
print(isLatin1(res), true);

res = decodeURIComponent(s);
print(res, "a+ def\x00A0");
print(isLatin1(res), true);


s += "\u1200";
print(decodeURI(s), "a%2b def\x00A0\u1200");
print(decodeURIComponent(s), "a+ def\x00A0\u1200");


try {
    decodeURI("abc%80");
    print(0, 1);
} catch(e) {
    print(e instanceof URIError, true);
}


try {
    decodeURI("abc%80\u1200");
    print(0, 1);
} catch(e) {
    print(e instanceof URIError, true);
}


res = encodeURI("a%2b def\x00A0");
print(res, "a%252b%20def%00A0");
print(isLatin1(res), true);

res = encodeURIComponent("a+ def\x00A0");
print(res, "a%2B%20def%00A0");
print(isLatin1(res), true);


res = encodeURI("a%2b def\x00A0\u1200");
print(res, "a%252b%20def%00A0%E1%88%80");
print(isLatin1(res), true);

res = encodeURIComponent("a+ def\x00A0\u1200");
print(res, "a%2B%20def%00A0%E1%88%80");
print(isLatin1(res), true);


try {
    encodeURI("a\uDB00");
    print(0, 1);
} catch(e) {
    print(e instanceof URIError, true);
}
