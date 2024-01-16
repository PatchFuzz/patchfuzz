


























function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

if (Intl.PluralRules.prototype.selectRange) {
    const pl = new Intl.PluralRules("sl");
    shouldBe(pl.selectRange.length, 2);
    shouldBe("few", pl.selectRange(102, 201));
}
