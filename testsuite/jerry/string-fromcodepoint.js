














assert(String.fromCodePoint(42) === "*")
assert(String.fromCodePoint(65, 90) === "AZ");
assert(String.fromCodePoint(0x404) === "Є");
assert(String.fromCodePoint(194564) === "你");
assert(String.fromCodePoint(0x1D306, 0x61, 0x1D307) === "𝌆a𝌇");
assert(String.fromCodePoint(0x1F303) === "🌃");


try {
    assert(String.fromCodePoint('_'));
    assert(false);
} catch (e) {
    assert(e instanceof RangeError);
}

try {
    assert(String.fromCodePoint(Infinity));
    assert(false);
} catch (e) {
    assert(e instanceof RangeError);
}

try {
    assert(String.fromCodePoint(-1));
    assert(false);
} catch (e) {
    assert(e instanceof RangeError);
}

try {
    assert(String.fromCodePoint(3.14));
    assert(false);
} catch (e) {
    assert(e instanceof RangeError);
}

try {
    assert(String.fromCodePoint(3e-2));
    assert(false);
} catch (e) {
    assert(e instanceof RangeError);
}

try {
    assert(String.fromCodePoint(NaN));
    assert(false);
} catch (e) {
    assert(e instanceof RangeError);
}
