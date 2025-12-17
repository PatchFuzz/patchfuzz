;

print("".split(""), []);
print("a".split(""), ["a"]);
print("abc".split(""), ["a", "b", "c"]);

print("abcd".split("", 2), ["a", "b"]);
print("abcd".split("", 0), []);
print("abcd".split("", -1), ["a", "b", "c", "d"]);


print("abcd".split(undefined, 0), []);

print("abcd".split(undefined, 1), ["abcd"]);
