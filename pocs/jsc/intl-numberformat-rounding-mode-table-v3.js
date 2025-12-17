function shouldBe(actual, expected, message) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected + " " + message);
}



let inputs = [-1.5, 0.4, 0.5, 0.6, 1.5];
let expectations = {
    "ceil":       ["-1", "1", "1", "1", "2"],
    "floor":      ["-2", "0", "0", "0", "1"],
    "expand":     ["-2", "1", "1", "1", "2"],
    "trunc":      ["-1", "0", "0", "0", "1"],
    "halfCeil":   ["-1", "0", "1", "1", "2"],
    "halfFloor":  ["-2", "0", "0", "1", "1"],
    "halfExpand": ["-2", "0", "1", "1", "2"],
    "halfTrunc":  ["-1", "0", "0", "1", "1"],
    "halfEven":   ["-2", "0", "0", "1", "2"],
};
Object.keys(expectations).forEach(function(roundingMode) {
    let exp = expectations[roundingMode];
    let idx = 0;
    let nf = new Intl.NumberFormat("en", {roundingMode, maximumFractionDigits: 0});
    shouldBe(roundingMode, nf.resolvedOptions().roundingMode);
    inputs.forEach(function(input) {
        let msg = "input: " + input + " with roundingMode: " + roundingMode;
        shouldBe(exp[idx++], nf.format(input), msg);
    })
});
