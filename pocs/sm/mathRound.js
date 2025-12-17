print(Math.round(3.14), 3);
print(Math.round(0.5), 1);
print(Math.round(-0), -0);
print(Math.round(0), 0);
print(Math.round(-1.03), -1);
print(Math.round(2147483649), 2147483649);
print(Math.round(2147483647.5), 2147483648);
print(Math.floor(2147483647.1), 2147483647);


function round1(x) {
    return Math.round(x);
}
print(round1(10.3), 10);
print(round1(-3.14), -3);
print(round1(-3.5), -3);
print(round1(-3.6), -4);
print(round1(3.5), 4);
print(round1(3.6), 4);
print(round1(0), 0);
print(round1(-0), -0); 
print(round1(12345), 12345);
print(round1(654.6), 655);


function round2(x) {
    return Math.round(x);
}
print(round2(1234.5), 1235);
print(round2(NaN), NaN); 
print(round2(4.6), 5);


function round3(x) {
    return Math.round(x);
}
print(round3(4), 4);
print(round3(-5), -5);
print(round3(0), 0);

