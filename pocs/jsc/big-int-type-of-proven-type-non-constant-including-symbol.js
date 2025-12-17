function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function typeOf(n) {
    var value = "string";
    var dispatcher = n % 3;
    if (dispatcher === 0)
        value = 1n;
    else if (dispatcher === 1)
        value = "string";
    else
        value = Symbol("symbol");
    return typeof value;
}
noInline(typeOf);

for (let i = 0; i < testLoopCount; i++) {
    switch (i % 3) {
    case 0:
        print(typeOf(i) === "bigint");
        break;
    case 1:
        print(typeOf(i) === "string");
        break;
    case 2:
        print(typeOf(i) === "symbol");
        break;
    }
}
