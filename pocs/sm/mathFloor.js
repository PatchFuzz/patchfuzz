print(Math.floor(3.14), 3);
print(Math.floor(-0), -0);
print(Math.floor(0), 0);
print(Math.floor(-1.23), -2);
print(Math.floor(2147483649), 2147483649);
print(Math.floor(2147483648.5), 2147483648);
print(Math.floor(2147483647.1), 2147483647);


function floor1(x) {
    return Math.floor(x);
}
print(floor1(10.3), 10);
print(floor1(-3.14), -4);
print(floor1(-0), -0); 
print(floor1(678.3), 678);


function floor2(x) {
    return Math.floor(x);
}
print(floor2(3.4), 3);
print(floor2(NaN), NaN); 
print(floor2(-4.4), -5);


function floor3(x) {
    return Math.floor(x);
}
print(floor3(4), 4);
print(floor3(-5), -5);
print(floor3(0), 0);

