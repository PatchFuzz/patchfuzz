function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

var target = print();
var testObject = { __proto__: target }
var result = {
    result: undefined
};


testObject.customValue = result;

shouldBe(result.result, undefined);


testObject.customAccessor = result;

shouldBe(result.result, testObject);
