function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function bool(n) {
    var value = "string";
    if (n & 0x1)
        value = 0n;
    return !!value;
}
noInline(bool);

for (let i = 0; i < testLoopCount; i++) {
    if (i & 0x1)
        print(bool(i) === false);
    else
        print(bool(i) === true);
}
