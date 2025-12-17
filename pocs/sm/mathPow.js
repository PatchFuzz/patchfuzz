print(Math.pow(100, 2), 10000);
print(Math.pow(-Infinity, -0.5), 0);
print(Math.pow(-Infinity,  0.5), Infinity);
print(Math.pow(Infinity, -0.5), 0);
print(Math.pow(Infinity,  0.5), Infinity);
print(Math.pow(NaN, -0.5), NaN);
print(Math.pow(NaN,  0.5), NaN);
print(Math.pow(-3.14, -0.5), NaN);
print(Math.pow(-1.23,  0.5), NaN);
print(Math.pow(-0, -0.5), Infinity);
print(Math.pow(-0,  0.5), 0);
print(Math.pow(-1, -0.5), NaN);
print(Math.pow(-1,  0.5), NaN);
print(Math.pow(0, -0.5), Infinity);
print(Math.pow(0,  0.5), 0);
print(Math.pow(1, -0.5), 1);
print(Math.pow(1,  0.5), 1);
print(Math.pow(100, -0.5), 0.1);
print(Math.pow(100,  0.5), 10);


function pow1(x) {
    return Math.pow(x, 0.5);
}
print(pow1(100), 10);
print(pow1(144), 12);
print(pow1(-0), 0);
print(pow1(0), 0);
print(pow1(1), 1);
print(pow1(-1), NaN);
print(pow1(NaN), NaN);
print(pow1(-Infinity), Infinity);
print(pow1(Infinity), Infinity);

