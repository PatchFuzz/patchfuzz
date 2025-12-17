function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

var d;

print(eval("d=5n\u000A") === 5n);
print(d === 5n);

print(eval("d=15n\u000D") === 15n);
print(d === 15n);

print(eval("d=19n\u2028;") === 19n);
print(d === 19n);

print(eval("d=95n\u2029;") === 95n);
print(d === 95n);

print(eval("d=\u000A5n") === 5n);
print(d === 5n);

print(eval("d=\u000D15n") === 15n);
print(d === 15n);

print(eval("d=\u202819n;") === 19n);
print(d === 19n);

print(eval("d=\u202995n;") === 95n);
print(d === 95n);

