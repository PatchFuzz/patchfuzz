function print(a, e) {
    if (a !== e) {
        throw new Error("Bad!");
    }
}

function logicalAnd(a, b) {
    return a && b;
}
noInline(logicalAnd);

for (let i = 0; i < testLoopCount; i++) {
    print(logicalAnd(1n, 10n), 10n);
    print(logicalAnd(1n, 1n), 1n);
    print(logicalAnd(1n, 0n), 0n);
    print(logicalAnd(1n, -1n), -1n);
}

