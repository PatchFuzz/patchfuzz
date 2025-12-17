function print(a, e, n) {
    if (a !== e) {
        throw new Error("Bad logical negation for " + n);
    }
}

function logicalNot(a) {
    return !a;
}
noInline(logicalNot);

for (let i = 0; i < testLoopCount; i++) {
    print(logicalNot(10n), false, 10n);
    print(logicalNot(1n), false, 1n);
    print(logicalNot(0n), true, 0n);
    print(logicalNot(-1n), false, -1n);
}

