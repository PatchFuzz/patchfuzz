function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function typeOf(n) {
    var value = "string";
    if (n & 0x1)
        value = 1n;
    return typeof value;
}
noInline(typeOf);

for (let i = 0; i < testLoopCount; i++) {
    if (i & 0x1)
        print(typeOf(i) === "bigint");
    else
        print(typeOf(i) === "string");
}
