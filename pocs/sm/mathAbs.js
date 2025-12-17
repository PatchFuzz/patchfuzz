print(Math.abs(-10), 10);
print(Math.abs(-2147483648), 2147483648);
print(Math.abs(2147483648), 2147483648);
print(Math.abs(-0), 0);
print(Math.abs(0), 0);
print(Math.abs(-3.14), 3.14);
print(Math.abs(NaN), NaN);


function abs1(x) {
    return Math.abs(x);
}
print(abs1(1), 1);
print(abs1(-1), 1);
print(abs1(0), 0);
print(abs1(-123) + abs1(234), 357);
print(abs1(-2147483648), 2147483648); 
print(abs1(-2), 2);


function abs2(x) {
    return Math.abs(x);
}
print(abs2(-2.2), 2.2);
print(abs2(123), 123);
print(abs2(-456), 456);
print(abs2(-0), 0);
print(abs2(1.3), 1.3);
print(abs2(NaN), NaN);

