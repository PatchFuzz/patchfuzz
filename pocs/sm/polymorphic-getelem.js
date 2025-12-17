function foo(s) {
    return arguments[s];
}

for (var i = 0; i < 100; i++) {
    print(foo("callee"), foo);
}

for (var i = 0; i < 100; i++) {
    print(foo("length"), 1);
}

for (var i = 0; i < 100; i++) {
    print(foo(0), 0);
}
