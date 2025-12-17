function foo() {
    with ({}) {}
    return bar(arguments);
}

function bar(x) {
    print(x.callee.name, "foo");
    print(arguments.callee.name, "bar");
}

for (var i = 0; i < 100; i++) {
    foo();
}
