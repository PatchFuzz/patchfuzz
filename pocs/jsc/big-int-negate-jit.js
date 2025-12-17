function print(a, b) {
    if (a !== b)
        throw new Error("Bad!");
}

function negateBigInt(n) {
    return -n;
}
noInline(negateBigInt);

for (let i = 0; i < testLoopCount; i++) {
    print(negateBigInt(100n), -100n);
    print(negateBigInt(-0x1fffffffffffff01n), 0x1fffffffffffff01n);
}

if (numberOfDFGCompiles(negateBigInt) > 1)
    throw "Failed negateBigInt(). We should have compiled a single negate for the BigInt type.";

function negateBigIntSpecializedToInt(n) {
    return -n;
}
noInline(negateBigIntSpecializedToInt);

for (let i = 0; i < testLoopCount; i++) {
    negateBigIntSpecializedToInt(100);
}

print(negateBigIntSpecializedToInt(100n), -100n);


function mixedSpeculationNegateBigInt(n, arr) {
    return -(-(-n));
}
noInline(mixedSpeculationNegateBigInt);

for (let i = 0; i < testLoopCount; i++) {
    if (i % 2)
        print(mixedSpeculationNegateBigInt(100), -100);
    else
        print(mixedSpeculationNegateBigInt(-0x1fffffffffffff01n), 0x1fffffffffffff01n);
}

if (numberOfDFGCompiles(mixedSpeculationNegateBigInt) > 1)
    throw "Failed mixedSpeculationNegateBigInt(). We should have compiled a single negate for the BigInt type.";

