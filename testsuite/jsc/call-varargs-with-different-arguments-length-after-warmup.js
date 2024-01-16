



var verbose = false;

function foo() {
    return arguments.length;
}

function Foo() {
    this.length = arguments.length;
}

var callTestBodyStr =
"    var result = this.method.apply(this, arguments);" + "\n" +
"    return result + 1;";

var constructTestBodyStr =
"    return new this.constructor(...arguments);";

var tiers = [
    { name: "LLint", iterations: 10 },
    { name: "BaselineJIT", iterations: 50 },
    { name: "DFG", iterations: 500 },
    { name: "FTL", iterations: 10000 },
];

function doTest(testCategory, testBodyStr, tier) {
    try {
        var iterations = tiers[tier].iterations;
        if (verbose)
            print("Testing " + testCategory + " tier " + tiers[tier].name + " by iterating " + iterations + " times");

        var o = {}
        o.method = foo;
        o.constructor = Foo;
        o.trigger = new Function(testBodyStr);

        for (var i = 0; i < iterations; i++)
            o.trigger(o, 1);
        o.trigger(o, 1, 2);

    } catch (e) {
        print("FAILED " + testCategory + " in tier " + tiers[tier].name + ": " + e);
        return false;
    }
    return true;
}

var failureFound = 0;

for (var tier = 0; tier < tiers.length; tier++) {
    if (!doTest("op_call_varargs", callTestBodyStr, tier))
        failureFound++;
}

for (var tier = 0; tier < tiers.length; tier++) {
    if (!doTest("op_construct_varargs", constructTestBodyStr, tier))
        failureFound++;
}

if (failureFound == 1)
    throw "ERROR: test has 1 failure";
else if (failureFound > 1)
    throw "ERROR: test has " + failureFound + " failures";
else if (verbose)
    print("No failures");
