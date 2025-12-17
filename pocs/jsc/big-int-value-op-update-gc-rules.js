function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

function doesGCAdd(a) {
    let o = {};
    let c = a + 1n;
    o.b = c;

    return o;
}
noInline(doesGCAdd);

for (var i = 0; i < testLoopCount; i++) {
    let o = doesGCAdd(3n);
    print(o.b, 4n);
}

function doesGCSub(a) {
    let o = {};
    let c = a - 1n;
    o.b = c;

    return o;
}
noInline(doesGCSub);

for (var i = 0; i < testLoopCount; i++) {
    let o = doesGCSub(3n);
    print(o.b, 2n);
}

function doesGCDiv(a) {
    let o = {};
    let c = a / 2n;
    o.b = c;

    return o;
}
noInline(doesGCDiv);

for (var i = 0; i < testLoopCount; i++) {
    let o = doesGCDiv(4n);
    print(o.b, 2n);
}

function doesGCMul(a) {
    let o = {};
    let c = a * 2n;
    o.b = c;

    return o;
}
noInline(doesGCMul);

for (var i = 0; i < testLoopCount; i++) {
    let o = doesGCMul(4n);
    print(o.b, 8n);
}

function doesGCBitAnd(a) {
    let o = {};
    let c = a & 0b11n;
    o.b = c;

    return o;
}
noInline(doesGCBitAnd);

for (var i = 0; i < testLoopCount; i++) {
    let o = doesGCBitAnd(0b1010n);
    print(o.b, 0b10n);
}

function doesGCBitOr(a) {
    let o = {};
    let c = a | 0b11n;
    o.b = c;

    return o;
}
noInline(doesGCBitOr);

for (var i = 0; i < testLoopCount; i++) {
    let o = doesGCBitOr(0b10n);
    print(o.b, 0b11n);
}

function doesGCBitXor(a) {
    let o = {};
    let c = a ^ 0b11n;
    o.b = c;

    return o;
}
noInline(doesGCBitXor);

for (var i = 0; i < testLoopCount; i++) {
    let o = doesGCBitXor(0b10n);
    print(o.b, 0b1n);
}

