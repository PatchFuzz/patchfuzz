function f() {
    var o = {__proto__: null};
    for (var i = 0; i < 15; i++) {
        print("foo" in o, false);
    }
}
f();
