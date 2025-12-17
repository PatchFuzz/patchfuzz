function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function llintCode1() {
    return print();
}

function llintCode2() {
    return print();
}

shouldBe(llintCode1(), true);
shouldBe(llintCode2(), false);
