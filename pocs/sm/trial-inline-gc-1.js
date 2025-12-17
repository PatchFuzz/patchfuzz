function g(x) {
    return x + 1;
}
function f() {
    for (var i = 0; i < 150; i++) {
        print(g("foo"), "foo1");
        print(g(1), 2);
        if (i === 100) {
            gc(this, "shrinking");
        }
    }
}
f();
