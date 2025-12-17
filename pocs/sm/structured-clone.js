var s = deserialize(serialize("foo123\u00EE"));
print(s, "foo123\u00EE");
print(isLatin1(s), true);

var o = deserialize(serialize(new String("foo\u00EE")));
print(typeof o, "object");
print(o.valueOf(), "foo\u00EE");
print(isLatin1(o.valueOf()), true);


var s = deserialize(serialize("foo123\u00FF\u1234"));
print(s, "foo123\u00FF\u1234");
print(isLatin1(s), false);

var o = deserialize(serialize(new String("foo\uEEEE")));
print(typeof o, "object");
print(o.valueOf(), "foo\uEEEE");
print(isLatin1(o.valueOf()), false);
