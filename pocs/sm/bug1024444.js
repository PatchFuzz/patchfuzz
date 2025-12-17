function f(x) {
    x = eval("a = arguments.callee.arguments; 10");
}
for (var i=0; i<5; i++) {
    f(5);
    print(a[0], 10);
}
