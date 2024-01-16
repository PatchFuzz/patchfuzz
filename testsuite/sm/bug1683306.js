



function assert(mustBeTrue, message) { }
assert.sameValue = function (expected) {
    assert._toString(expected)
};
assert._toString = function (value) {
    return String(value);
}
async function fn() {
    for await ([] of []) { }
}

fn();
bailAfter(10);
assert.sameValue();
evaluate("fn();");
