


























function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}

let penny = new Intl.NumberFormat(
    "en", { minimumFractionDigits: 2, maximumFractionDigits: 2, roundingIncrement: 1 });
let nickel = new Intl.NumberFormat(
    "en", { minimumFractionDigits: 2, maximumFractionDigits: 2, roundingIncrement: 5 });
let dime = new Intl.NumberFormat(
    "en", { minimumFractionDigits: 2, maximumFractionDigits: 2, roundingIncrement: 10 });


shouldBe("10.15", penny.format(10.154));
shouldBe("10.16", penny.format(10.155));
shouldBe("10.10", nickel.format(10.124));
shouldBe("10.15", nickel.format(10.125));
shouldBe("10.40", dime.format(10.444));

shouldBe("10.40", dime.format(10.445));
shouldBe("10.40", dime.format(10.445));
shouldBe("10.50", dime.format(10.45));
