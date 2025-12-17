function shouldThrow(func, errorType) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }

    if (!(error instanceof errorType))
        throw new Error(`Expected ${errorType.name}!`);
}


let validRoundingIncrements = [
    1, 2, 5, 10, 20, 50, 100, 500, 1000, 5000
];

let invalidRoundingIncrements = [
    -1, -5, 0, 1001, 1100, 5500, 200000, 500005, 10000000, 10000, 50000, 100000, 500000, 1000000,
    5000000
];

validRoundingIncrements.forEach(function(roundingIncrement) {
    new Intl.NumberFormat(undefined, {roundingIncrement});
});

invalidRoundingIncrements.forEach(function(roundingIncrement) {
    shouldThrow(() => {
        new Intl.NumberFormat(undefined, {roundingIncrement})
    }, RangeError);
});
