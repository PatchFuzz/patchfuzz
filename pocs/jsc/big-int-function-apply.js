function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function foo() {
    return 0;
}

try {
    foo.apply({}, 2n);
    print(false);
} catch(e) {
    print(e.message == "second argument to Function.prototype.apply must be an Array-like object (evaluating 'foo.apply({}, 2n)')")
}

