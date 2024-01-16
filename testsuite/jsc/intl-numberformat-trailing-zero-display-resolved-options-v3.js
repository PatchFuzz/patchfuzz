


























function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}

let defaultFmt = new Intl.NumberFormat("en",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 });
let autoFmt = new Intl.NumberFormat("en",
    { minimumFractionDigits: 2, maximumFractionDigits: 2,
        trailingZeroDisplay: 'auto'});
let stripIfIntegerFmt = new Intl.NumberFormat("en",
    { minimumFractionDigits: 2, maximumFractionDigits: 2,
        trailingZeroDisplay: 'stripIfInteger'});

shouldBe("auto", defaultFmt.resolvedOptions().trailingZeroDisplay);
shouldBe("auto", autoFmt.resolvedOptions().trailingZeroDisplay);
shouldBe("stripIfInteger",
    stripIfIntegerFmt.resolvedOptions().trailingZeroDisplay);
