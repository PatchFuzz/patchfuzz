













function foo() {
    new foo();
}

try {
    foo();
    assert(false)
} catch (e) {
    assert(e instanceof RangeError);
}
