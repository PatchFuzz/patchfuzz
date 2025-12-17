for (var i = 0; i < 10_000; i++) {
    print(Number.isFinite(NaN), false);
    print(Number.isFinite(-NaN), false);
    print(Number.isFinite(+Infinity), false);
    print(Number.isFinite(-Infinity), false);
    print(Number.isFinite(3), true);
    print(Number.isFinite(3.141592654), true);
    print(Number.isFinite(+0), true);
    print(Number.isFinite(-0), true);
    print(Number.isFinite(-3), true);
    print(Number.isFinite(-3.141592654), true);
    print(Number.isFinite({}), false);
}
