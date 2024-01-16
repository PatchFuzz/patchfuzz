


























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

shouldBe("3.14", defaultFmt.format(3.1411));
shouldBe("3.14", autoFmt.format(3.1411));
shouldBe("3.14", stripIfIntegerFmt.format(3.1411));
shouldBe("3.00", defaultFmt.format(3.001411));
shouldBe("3.00", autoFmt.format(3.001411));
if ($vm.icuVersion() >= 69)
    shouldBe("3", stripIfIntegerFmt.format(3.001411));
else
    shouldBe("3.00", stripIfIntegerFmt.format(3.001411));
shouldBe("3.00", defaultFmt.format(2.999411));
shouldBe("3.00", autoFmt.format(2.999411));
if ($vm.icuVersion() >= 69)
    shouldBe("3", stripIfIntegerFmt.format(2.999411));
else
    shouldBe("3.00", stripIfIntegerFmt.format(2.999411));
