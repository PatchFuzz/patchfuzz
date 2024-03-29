function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function test1(obj)
{
    return "hello" in obj
}
noInline(test1);

let array = [
    [{
        hello: 42
    }, true],
    [{
        world: 43
    }, false],
    [{
        __proto__: {
            hello: 44
        }
    }, true]
];
for (let i = 0; i < 1e5; ++i) {
    for (let [obj, result] of array)
        shouldBe(test1(obj), result);
}


for (let i = 0; i < 1e5; ++i)
    shouldBe(test1({}), false);
