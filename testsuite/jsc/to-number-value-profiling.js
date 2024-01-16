function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${String(actual)}`);
}

function test(x) {
    return Number(x) < 42;
}
noInline(test);

var object = { valueOf() { return 42; } };
for (var i = 0; i < 1e4; ++i)
    shouldBe(test(object), false);



var object = { valueOf() { return 42.195; } };
for (var i = 0; i < 1e4; ++i)
    shouldBe(test(object), false);
