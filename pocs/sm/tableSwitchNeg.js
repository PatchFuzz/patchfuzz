function f(a) {
    switch(a) {
        case -1: return 1;
        case -2: return 2;
        case -5: return 5;
        default: return 10;
    }
}

print(f(-1), 1);
print(f(-2), 2);
print(f(-5), 5);

print(f(-3), 10);
print(f(-6), 10);
print(f(0), 10);
print(f(1), 10);

print(f(-2147483647), 10);
print(f(-2147483648), 10);
print(f(-2147483649), 10);

print(f(2147483647), 10);
print(f(2147483648), 10);
print(f(2147483649), 10);

