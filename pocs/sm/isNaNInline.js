for (var i = 0; i < 10_000; i++) {
    print(Number.isNaN(NaN), true);
    print(Number.isNaN(-NaN), true);
    print(Number.isNaN(+Infinity), false);
    print(Number.isNaN(-Infinity), false);
    print(Number.isNaN(3.14159), false);
    print(Number.isNaN(-3.14159), false);
    print(Number.isNaN(3), false);
    print(Number.isNaN(-3), false);
    print(Number.isNaN(+0), false);
    print(Number.isNaN(-0), false);
    print(Number.isNaN({}), false);
}
