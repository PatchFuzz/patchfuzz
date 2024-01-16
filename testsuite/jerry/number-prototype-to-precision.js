















assert((123.56).toPrecision() === "123.56");
assert((123.56).toPrecision(1) === "1e+2");
assert((123.56).toPrecision(2) === "1.2e+2");
assert((123.56).toPrecision(6) === "123.560");
assert((-1.23).toPrecision(1) === "-1");
assert((0.00023).toPrecision(1) === "0.0002");
assert((0.356).toPrecision(2) === "0.36");
assert((0.0000356).toPrecision(5) === "0.000035600");
assert((0.000030056).toPrecision(4) === "0.00003006");
assert(Infinity.toPrecision(1) === "Infinity");
assert((-Infinity).toPrecision(1) === "-Infinity");
assert(NaN.toPrecision(1) === "NaN");
assert((0.0).toPrecision(1) === "0");
assert((-0.0).toPrecision(1) === "0");
assert((0.0).toPrecision(6) === "0.00000");
assert((123456789012345678901.0).toPrecision(20) === "1.2345678901234568000e+20");
assert((123456789012345678901.0).toPrecision(21) === "123456789012345680000");
assert((123456789012345678901.0).toPrecision("6") === "1.23457e+20");
assert((0.0000004).toPrecision(2) === "4.0e-7");
assert((0.000004).toPrecision(2) === "0.0000040");
assert((1234.92).toPrecision(4) === "1235");
assert((1234.92).toPrecision(3) === "1.23e+3");

assert((123.56).toPrecision(1.3) === "1e+2");
assert((123.56).toPrecision(21.9) === "123.560000000000000000");
assert((12).toPrecision(22) === "12.00000000000000000000")

assert(Number(982).toPrecision(1) === "1e+3");
assert(Number(982).toPrecision(2) === "9.8e+2");
assert(Number(1499).toPrecision(1) === "1e+3");
assert(Number(1500).toPrecision(1) === "2e+3");

try {
    (12).toPrecision(0);
    assert(false);
} catch (e) {
    assert(e instanceof RangeError)
}

try {
    Number.prototype.toExponential.call(new Object());
    assert(false);
} catch (e) {
    assert(e instanceof TypeError)
}


assert((+Infinity).toPrecision(1000) === "Infinity");
var n = new Number(+Infinity);
assert(n.toPrecision(1000) === "Infinity");

assert((-Infinity).toPrecision(1000) === "-Infinity");
var n = new Number(-Infinity);
assert(n.toPrecision(1000) === "-Infinity");

assert(NaN.toPrecision(undefined) === "NaN");
  
var calls = 0;

var p = {
  valueOf: function() {
    calls++;
	return Infinity;
  }
};

assert(NaN.toPrecision(p) === "NaN");
assert(calls === 1);

var n = new Number(NaN);
calls = 0;
assert(n.toPrecision(p) === "NaN");
assert(calls === 1);