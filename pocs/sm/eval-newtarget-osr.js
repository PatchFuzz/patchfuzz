function f(expected) {
    eval("for (var i = 0; i < 30; i++) print(new.target, expected)");
}
new f(f);
f(undefined);
