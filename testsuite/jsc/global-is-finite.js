function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${actual}`);
}
for (var i = -1e4; i < 1e4; ++i)
    shouldBe(isFinite(i), true);


for (var i = 0; i < 1e4; ++i) {
    shouldBe(isFinite(Infinity), false);
    shouldBe(isFinite(-Infinity), false);
    shouldBe(isFinite(NaN), false);
}


for (var i = 0; i < 1e4; ++i)
    shouldBe(isFinite("0"), true);
shouldBe(isFinite("Hello"), false);
