













function foo() {
    new foo();
}

try {
    foo();
    print(false)
} catch (e) {
    print(e instanceof RangeError);
}
