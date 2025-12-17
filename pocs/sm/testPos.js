function f_int(x) {
    return +x;
}

function f_double(x) {
    return +x;
}

for (var i = 0; i < 1000; i++) {
    print(f_int(0), 0);
    print(f_int(1), 1);
    print(f_int(-1), -1);
    print(f_int(-2147483648), -2147483648);
    print(f_int(2147483647), 2147483647);
}

for (var i = 0; i < 1000; i++) {
    print(f_double(0.0), 0.0);
    print(f_double(1.0), 1.0);
    print(f_double(-1.0), -1.0);
    print(f_double(-2.147483648), -2.147483648);
    print(f_double(2.147483647), 2.147483647);
}

for (var i = 0; i < 1000; i++) {
    print(f_double("0.0"), 0.0);
    print(f_double("1.0"), 1.0);
    print(f_double("-1.0"), -1.0);
    print(f_double("-2.147483648"), -2.147483648);
    print(f_double("2.147483647"), 2.147483647);
}
