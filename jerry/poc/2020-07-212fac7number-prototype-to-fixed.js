















print((123.56).toFixed() === "124");
print((123.56).toFixed(0) === "124");
print((123.56).toFixed(1) === "123.6");
print((123.56).toFixed(5) === "123.56000");
print((1.23e-10).toFixed(2) === "0.00");
print((1.23e+20).toFixed(2) === "123000000000000000000.00");
print((1.23e+21).toFixed(2) === "1.23e+21");
print((-1.23).toFixed(1) === "-1.2");
print((0.00023).toFixed(0) === "0");
print((0.356).toFixed(2) === "0.36");
print((0.0000356).toFixed(5) === "0.00004");
print((0.000030056).toFixed(7) === "0.0000301");
print(Infinity.toFixed(0) === "Infinity");
print((-Infinity).toFixed(0) === "-Infinity");
print(NaN.toFixed(0) === "NaN");
print((0.0).toFixed(0) === "0");
print((0.0).toFixed(1) === "0.0");
print((-0.0).toFixed(0) === "0");
print((-0.0).toFixed(1) === "0.0");
print((123.56).toFixed(NaN) === "124");
print((123.56).toFixed(-0.9) === "124");
print((0.095).toFixed(2) === "0.10");
print((0.995).toFixed(2) === "1.00")
print((9.995).toFixed(2) === "10.00");
print((7.995).toFixed(2) === "8.00");
print((8.995).toFixed(2) === "9.00");
print((99.995).toFixed(2) === "100.00");
print((12).toFixed(21) === "12.000000000000000000000");
print((-1111111111111111111111.12).toFixed(3) === "-1.1111111111111111e+21");
print((1111111111111111111111.12).toFixed(3) === "1.1111111111111111e+21");

try {
    Number.prototype.toExponential.call(new Object());
    print(false);
} catch (e) {
    print(e instanceof TypeError)
}

try {
    (12).toFixed(-1);
    print(false);
} catch (e) {
    print(e instanceof RangeError)
}

print((0.5).toFixed(0) === "1");
print((1.5).toFixed(0) === "2");
print((12.5).toFixed(0) === "13");
print((123.5).toFixed(0) === "124");
print((1234.5).toFixed(0) === "1235");
print((0.567).toFixed(0) === "1");
print((1.567).toFixed(0) === "2");
print((12.567).toFixed(0) === "13");
print((123.567).toFixed(0) === "124");
print((1234.567).toFixed(0) === "1235");

print((1.2567).toFixed(0) === "1");
print((1.2567).toFixed(1) === "1.3");
print((1.2567).toFixed(2) === "1.26");
print((1.2567).toFixed(3) === "1.257");
print((1.2567).toFixed(4) === "1.2567");
print((1.2567).toFixed(5) === "1.25670");

print((12.3567).toFixed(0) === "12");
print((12.3567).toFixed(1) === "12.4");
print((12.3567).toFixed(2) === "12.36");
print((12.3567).toFixed(3) === "12.357");
print((12.3567).toFixed(4) === "12.3567");
print((12.3567).toFixed(5) === "12.35670");

print((123.4567).toFixed(0) === "123");
print((123.4567).toFixed(1) === "123.5");
print((123.4567).toFixed(2) === "123.46");
print((123.4567).toFixed(3) === "123.457");
print((123.4567).toFixed(4) === "123.4567");
print((123.4567).toFixed(5) === "123.45670");
