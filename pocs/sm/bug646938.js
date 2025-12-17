function f() {
    var x = -[NaN][0];
    print(x === x, false);
    print(x !== x, true);
    print(x == x, false);
    print(x != x, true);

    var y = -("x" / {});
    var z = y;
    print(y === z, false);
    print(y !== z, true);
    print(y == z, false);
    print(y != z, true);
}
f();

function g(x, y) {
    var z = x / y;
    print(z === z, false);
}
g(0, 0);
