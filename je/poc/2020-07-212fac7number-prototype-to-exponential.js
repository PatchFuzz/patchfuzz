















print((123.56).toExponential() === "1.2356e+2");
print((123.56).toExponential(0) === "1e+2");
print((123.56).toExponential(1) === "1.2e+2");
print((123.56).toExponential(5) === "1.23560e+2");
print((-1.23).toExponential(1) === "-1.2e+0");
print((0.00023).toExponential(0) === "2e-4");
print((0.356).toExponential(1) === "3.6e-1");
print((0.0000356).toExponential(2) === "3.56e-5");
print((0.000030056).toExponential(2) === "3.01e-5");
print(Infinity.toExponential(0) === "Infinity");
print((-Infinity).toExponential(0) === "-Infinity");
print(NaN.toExponential(0) === "NaN");
print((0.0).toExponential(0) === "0e+0");
print((0.0).toExponential(1) === "0.0e+0");
print((-0.0).toExponential(0) === "0e+0");
print((-0.0).toExponential(1) === "0.0e+0");
print((123456789012345678901.0).toExponential(20) === "1.23456789012345680000e+20");
print((123456789012345678901.0).toExponential("6") === "1.234568e+20");
print((123.45).toExponential(3.2) === "1.235e+2");
print((123.45).toExponential(-0.1) === "1e+2");
print((12).toExponential(21) === "1.200000000000000000000e+1")

try {
    (12).toExponential(Number.MAX_VALUE);
    print(false);
} catch (e) {
    print(e instanceof RangeError)
}

try {
    (12).toExponential(Infinity);
    print(false);
} catch (e) {
    print(e instanceof RangeError)
}

try {
    (12).toExponential(-1);
    print(false);
} catch (e) {
    print(e instanceof RangeError)
}

try {
    Number.prototype.toExponential.call(new Object());
    print(false);
} catch (e) {
    print(e instanceof TypeError)
}
