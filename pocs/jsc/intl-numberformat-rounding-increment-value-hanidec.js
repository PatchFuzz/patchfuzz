function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}

let penny = new Intl.NumberFormat("ja-JP", { numberingSystem: 'hanidec', minimumFractionDigits: 2, maximumFractionDigits: 2, roundingIncrement: 1 });
let nickel = new Intl.NumberFormat("ja-JP", { numberingSystem: 'hanidec', minimumFractionDigits: 2, maximumFractionDigits: 2, roundingIncrement: 5 });
let dime = new Intl.NumberFormat("ja-JP", { numberingSystem: 'hanidec', minimumFractionDigits: 2, maximumFractionDigits: 2, roundingIncrement: 10 });

shouldBe("一〇.一五", penny.format(10.154));
shouldBe("一〇.一六", penny.format(10.155));
shouldBe("一〇.一〇", nickel.format(10.124));
shouldBe("一〇.一五", nickel.format(10.125));
shouldBe("一〇.四〇", dime.format(10.444));
shouldBe("一〇.四〇", dime.format(10.445));
shouldBe("一〇.四〇", dime.format(10.445));
shouldBe("一〇.五〇", dime.format(10.45));
