


























function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}

function shouldThrow(func, errorMessage) {
    var errorThrown = false;
    var error = null;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== errorMessage)
        throw new Error(`bad error: ${String(error)}`);
}

let validRoundingMode = [
    "ceil",
    "floor",
    "expand",
    "halfCeil",
    "halfExpand",
    "halfFloor",
    "halfTrunc",
    "halfEven",
    "trunc",
];

let invalidRoundingMode = [
    "ceiling",
    "down",
    "Down",
    "flooring",
    "halfDown",
    "halfUp",
    "halfup",
    "halfeven",
    "halfdown",
    "half-up",
    "half-even",
    "half-down",
    "up",
    "Up",
];

validRoundingMode.forEach(function(roundingMode) {
    let nf = new Intl.NumberFormat(undefined, {roundingMode});
    shouldBe(roundingMode, nf.resolvedOptions().roundingMode);
});

invalidRoundingMode.forEach(function(roundingMode) {
    shouldThrow(() => {
        let nf = new Intl.NumberFormat(undefined, {roundingMode}); }, `RangeError: roundingMode must be either "ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", or "halfEven"`);
});


shouldBe("halfExpand", (new Intl.NumberFormat().resolvedOptions().roundingMode));
shouldBe("halfExpand", (new Intl.NumberFormat(
    undefined, {roundingMode: undefined}).resolvedOptions().roundingMode));



let read = [];
let options = {
    get signDisplay() { read.push('signDisplay'); return undefined; },
    get roundingMode() { read.push('roundingMode'); return undefined; },
};

new Intl.NumberFormat(undefined, options);
shouldBe("signDisplay,roundingMode", read.join(","));
