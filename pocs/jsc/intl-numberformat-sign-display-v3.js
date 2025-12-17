function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}


let nf = new Intl.NumberFormat();
shouldBe("auto", nf.resolvedOptions().signDisplay);

nf = new Intl.NumberFormat("en");
shouldBe("auto", nf.resolvedOptions().signDisplay);

const testData = [
    ["auto",        "-123",  "-0",  "0",  "123"],
    ["always",      "-123",  "-0", "+0", "+123"],
    ["never",       "123",   "0",  "0",  "123"],
    ["exceptZero",  "-123",  "0",  "0",  "+123"],
    ["negative",    "-123",  "0",  "0",  "123"],
];

for (const [signDisplay, neg, negZero, zero, pos] of testData) {
    nf = new Intl.NumberFormat("en", {signDisplay});
    shouldBe(signDisplay, nf.resolvedOptions().signDisplay);
    shouldBe(neg, nf.format(-123));
    shouldBe(negZero, nf.format(-0));
    shouldBe(zero, nf.format(0));
    shouldBe(pos, nf.format(123));
}
