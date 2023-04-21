















print((123.56).toPrecision() === "123.56");
print((123.56).toPrecision(1) === "1e+2");
print((123.56).toPrecision(2) === "1.2e+2");
print((123.56).toPrecision(6) === "123.560");
print((-1.23).toPrecision(1) === "-1");
print((0.00023).toPrecision(1) === "0.0002");
print((0.356).toPrecision(2) === "0.36");
print((0.0000356).toPrecision(5) === "0.000035600");
print((0.000030056).toPrecision(4) === "0.00003006");
print(Infinity.toPrecision(1) === "Infinity");
print((-Infinity).toPrecision(1) === "-Infinity");
print(NaN.toPrecision(1) === "NaN");
print((0.0).toPrecision(1) === "0");
print((-0.0).toPrecision(1) === "0");
print((0.0).toPrecision(6) === "0.00000");
print((123456789012345678901.0).toPrecision(20) === "1.2345678901234568000e+20");
print((123456789012345678901.0).toPrecision(21) === "123456789012345680000");
print((123456789012345678901.0).toPrecision("6") === "1.23457e+20");
print((0.0000004).toPrecision(2) === "4.0e-7");
print((0.000004).toPrecision(2) === "0.0000040");
print((1234.92).toPrecision(4) === "1235");
print((1234.92).toPrecision(3) === "1.23e+3");

print((123.56).toPrecision(1.3) === "1e+2");
print((123.56).toPrecision(21.9) === "123.560000000000000000");
print((12).toPrecision(22) === "12.00000000000000000000")

print(Number(982).toPrecision(1) === "1e+3");
print(Number(982).toPrecision(2) === "9.8e+2");
print(Number(1499).toPrecision(1) === "1e+3");
print(Number(1500).toPrecision(1) === "2e+3");

try {
    (12).toPrecision(0);
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


print((+Infinity).toPrecision(1000) === "Infinity");
var n = new Number(+Infinity);
print(n.toPrecision(1000) === "Infinity");

print((-Infinity).toPrecision(1000) === "-Infinity");
var n = new Number(-Infinity);
print(n.toPrecision(1000) === "-Infinity");

print(NaN.toPrecision(undefined) === "NaN");
  
var calls = 0;

var p = {
  valueOf: function() {
    calls++;
	return Infinity;
  }
};

print(NaN.toPrecision(p) === "NaN");
print(calls === 1);

var n = new Number(NaN);
calls = 0;
print(n.toPrecision(p) === "NaN");
print(calls === 1);
