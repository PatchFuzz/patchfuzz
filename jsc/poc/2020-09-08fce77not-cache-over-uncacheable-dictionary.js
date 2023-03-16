function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

var object = {};
print(object);
shouldBe(String(object), `[object Object]`);
shouldBe(String(object), `[object Object]`);
shouldBe(String(object), `[object Object]`);
object[Symbol.toStringTag] = "OK";
shouldBe(String(object), `[object OK]`);
shouldBe(String(object), `[object OK]`);
shouldBe(String(object), `[object OK]`);
