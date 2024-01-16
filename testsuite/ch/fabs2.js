






function testOp(av) {
    return Math.abs(av);
}

WScript.Echo(testOp(123.334) === 123.334);
WScript.Echo(testOp(-123.334) === 123.334);
WScript.Echo(isNaN(testOp(NaN)));
WScript.Echo(isNaN(testOp(-NaN)));
WScript.Echo(testOp(Infinity) === Infinity);
WScript.Echo(testOp(-Infinity) === Infinity);
WScript.Echo(testOp(0.0) === 0.0);
WScript.Echo(testOp(-0.0) === 0.0);

