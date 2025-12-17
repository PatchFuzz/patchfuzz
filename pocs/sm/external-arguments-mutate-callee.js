function foo() {
    arguments.callee = {name: "mutated"};
    return bar(arguments);
}

function bar(x) {
    print(x.callee.name, "mutated");
    print(arguments.callee.name, "bar");
}

for (var i = 0; i < 100; i++) {
    foo();
}
