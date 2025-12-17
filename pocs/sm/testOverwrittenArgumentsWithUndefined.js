function f() {
    var a = arguments;
    eval("print(arguments[0], 42)");
    eval("print(arguments, a)");
    arguments = undefined;
    eval("print(arguments, undefined)");
    arguments = a;
    eval("print(arguments[0], 42)");
    eval("print(arguments, a)");
}
f(42);

function f(z) {
    var a = arguments;
    eval("print(arguments[0], 42)");
    eval("print(arguments, a)");
    arguments = undefined;
    eval("print(arguments, undefined)");
    z = 17;
    eval("print(a[0], 17)");
    a[0] = 'ponies';
    eval("print(z, 'ponies')");
}
f(42);
