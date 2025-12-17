function f() {
    while (true) {
        return 1;
    }
}
for (var i = 0; i < 100; i++) {
    f();
}
