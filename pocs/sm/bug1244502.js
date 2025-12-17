function f(arg) {
    bailout();
    print(arguments.length, 2);
    print(arg, "");
    print(arguments[0], "");
    print(arguments[1], 0);
}
for (var i = 0; i < 100; ++i) {
    (function() {
        f.call(1, "", 0);
    })();
}
