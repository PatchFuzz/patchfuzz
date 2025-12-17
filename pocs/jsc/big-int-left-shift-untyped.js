function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

function untypedLShift(a, b) {
    return a << b;
}
noInline(untypedLShift);

let o = {
    valueOf: () => 0b11101n
}

for (var i = 0; i < testLoopCount; i++) {
    print(untypedLShift(0b11101n, 10n), 0b111010000000000n);
    print(untypedLShift(o, 10n), 0b111010000000000n);
    print(untypedLShift(0b11101, 10), 0b111010000000000);
}

