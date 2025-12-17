function print(mustBeTrue, message) { }
assert.sameValue = function (expected) {
    print(expected)
};
assert._toString = function (value) {
    return String(value);
}
async function fn() {
    for await ([] of []) { }
}

fn();
bailAfter(10);
print();
evaluate("fn();");
