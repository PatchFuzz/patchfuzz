print(Math.sqrt(-Infinity), NaN);
print(Math.sqrt(-3.14), NaN);
print(Math.sqrt(-2), NaN);
print(Math.sqrt(-0), -0);
print(Math.sqrt(0), 0);
print(Math.sqrt(2), Math.SQRT2);
print(Math.sqrt(49), 7);
print(Math.sqrt(Infinity), Infinity);


function sqrt1(x) {
    return Math.sqrt(x);
}
print(sqrt1(NaN), NaN);
print(sqrt1(-Infinity), NaN);
print(sqrt1(Infinity), Infinity);
print(sqrt1(-0), -0);
print(sqrt1(2), Math.SQRT2);
print(sqrt1(16), 4);


function sqrt2(x) {
    return Math.sqrt(x);
}
print(sqrt2(4), 2);
print(sqrt2(169), 13);
print(sqrt2(0), 0);

