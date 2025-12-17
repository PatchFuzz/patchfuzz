function print(a, e) {
    if (a !== e) {
        throw new Error("Bad!");
    }
}

function logicalOr(a, b) {
    return a || b;
}
noInline(logicalOr);

for (let i = 0; i < testLoopCount; i++) {
    print(logicalOr(10n, "abc"), 10n);
    print(logicalOr(1n, "abc"), 1n);
    print(logicalOr(0n, "abc"), "abc");
    print(logicalOr(-1n, "abc"), -1n);
}

