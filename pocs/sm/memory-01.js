function foo(n) {
    for (var i = 0; i < n; i++) {}
    return i;
}

print(foo(1000), 1000);

gc();

eval("print(foo(1000.5), 1001)");

