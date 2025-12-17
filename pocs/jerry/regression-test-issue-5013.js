function foo() {
    var a;
    function* bar() {
        try {
            yield* b;
        } catch (e) {
            a = e;
        }
    }
    var b = bar();
    b.next();

    return a;
}

foo();
