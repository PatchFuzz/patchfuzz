function print(a, text) {
    if (!a)
        throw new Error(`Failed assertion: ${text}`);
}

function shouldBe(a, b) {
    if (a !== b)
        throw new Error(`Expected ${b} but got ${a}`);
}

let object1 = {};
let object2 = {};

let weakmap = new WeakMap;

shouldBe(weakmap.getOrInsertComputed(object1, function(key) {
    print(key === object1, "should provide key");
    return 1;
}), 1);
shouldBe(weakmap.getOrInsertComputed(object1, function(key) {
    print(false, "not reached");
    return 2;
}), 1);
shouldBe(weakmap.getOrInsertComputed(object1, function(key) {
    print(false, "not reached");
    return 3;
}), 1);

shouldBe(weakmap.getOrInsertComputed(object2, function(key) {
    print(key === object2, "should provide key");
    return 3;
}), 3);
shouldBe(weakmap.getOrInsertComputed(object2, function(key) {
    print(false, "not reached");
    return 2;
}), 3);
shouldBe(weakmap.getOrInsertComputed(object2, function(key) {
    print(false, "not reached");
    return 1;
}), 3);

for (let invalid of [null, undefined, true, "test", 42, Symbol.for("symbol")]) {
    try {
        weakmap.getOrInsertComputed(invalid, () => {
            print(false, "not reached");
            return 42;
        });
        print(false, "should throw");
    } catch (e) {
        print(e instanceof TypeError, "should throw");
    }
}

for (let invalid of [null, undefined, true, "test", 42, [], {}]) {
    try {
        weakmap.getOrInsertComputed({}, invalid);
        print(false, "should throw");
    } catch (e) {
        print(e instanceof TypeError, "should throw");
    }
}
