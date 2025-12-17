function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}

let validRoundingIncrements = [
    1, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000
];

validRoundingIncrements.forEach(function(roundingIncrement) {
    let nf = new Intl.NumberFormat(undefined, {roundingIncrement});
    shouldBe(roundingIncrement, nf.resolvedOptions().roundingIncrement);
});
