function g(x) {
    print(arguments.length, 1);
    print(x.length, 4);
}

function f() {
    for (var i = 0; i < 9; i++)
        g(arguments);
}

f(1, 2, 3, 4);
