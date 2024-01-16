


var x = new Int32Array(10);


function CanonicalNumericIndexString(argument) {
    
    assertEq(typeof argument, "string");

    
    if (argument === "-0") {
        return -0;
    }

    
    var n = Number(argument);

    
    if (String(n) !== argument) {
        return undefined;
    }

    
    return n;
}

function CanonicalIndexInRange(argument) {
    return Number.isInteger(argument) && !Object.is(argument, -0) &&
           argument >= 0 && argument < x.length;
}

function assertCanonicalNumericIndexString(i) {
    var canonical = CanonicalNumericIndexString(i);
    assertEq(canonical !== undefined, true,
            `Argument ${i} is not a canonical numeric index string`);

    x[i] = 0; 
    x[i] = 1;

    var expected = CanonicalIndexInRange(canonical) ? 1 : undefined;
    assertEq(x[i], expected, `${i} is a canonical index string`);

    

    x[canonical] = 0; 
    x[canonical] = 2;

    
    var expected = CanonicalIndexInRange(canonical + 0) ? 2 : undefined;
    assertEq(x[canonical], expected, `${i} is a canonical index string`);
}

function assertNotCanonicalNumericIndexString(i) {
    assertEq(CanonicalNumericIndexString(i) === undefined, true,
             `Argument ${i} is a canonical numeric index string`);

    x[i] = ""; 
    x[i] = "test";

    assertEq(x[i], "test", `${i} isn't a canonical index string`);
}

function f() {
    for (var i = -100; i < 100; i++) {
        assertCanonicalNumericIndexString(String(i));
    }
}
f();



assertCanonicalNumericIndexString("2147483647");
assertCanonicalNumericIndexString("4294967295");



assertNotCanonicalNumericIndexString("9223372036854775807");
assertNotCanonicalNumericIndexString("18446744073709551615");



assertEq(String(18446744073709551615), "18446744073709552000");

assertCanonicalNumericIndexString("18446744073709552000");
assertCanonicalNumericIndexString("18446744073709556000");




assertEq(String(Number.MAX_SAFE_INTEGER), "9007199254740991");

assertCanonicalNumericIndexString("9007199254740991");
assertCanonicalNumericIndexString("9007199254740992");
assertNotCanonicalNumericIndexString("9007199254740993");




assertEq(String(Number.MIN_SAFE_INTEGER), "-9007199254740991");

assertCanonicalNumericIndexString("-9007199254740991");
assertCanonicalNumericIndexString("-9007199254740992");
assertNotCanonicalNumericIndexString("-9007199254740993");



assertCanonicalNumericIndexString("-0");



assertCanonicalNumericIndexString("0.1");
assertCanonicalNumericIndexString("-0.1");



assertNotCanonicalNumericIndexString("0.10");
assertNotCanonicalNumericIndexString("-0.10");



assertEq(String(Number.MIN_VALUE), "5e-324");
assertEq(String(-Number.MIN_VALUE), "-5e-324");

assertCanonicalNumericIndexString("5e-324");
assertCanonicalNumericIndexString("-5e-324");

assertNotCanonicalNumericIndexString("5E-324");
assertNotCanonicalNumericIndexString("-5E-324");



assertNotCanonicalNumericIndexString("1e2");
assertNotCanonicalNumericIndexString("-1e2");
assertNotCanonicalNumericIndexString("1e+2");
assertNotCanonicalNumericIndexString("-1e+2");
assertNotCanonicalNumericIndexString("1e-2");
assertNotCanonicalNumericIndexString("-1e-2");

assertNotCanonicalNumericIndexString("1E2");
assertNotCanonicalNumericIndexString("-1E2");
assertNotCanonicalNumericIndexString("1E+2");
assertNotCanonicalNumericIndexString("-1E+2");
assertNotCanonicalNumericIndexString("1E-2");
assertNotCanonicalNumericIndexString("-1E-2");



assertEq(String(Number.MAX_VALUE), "1.7976931348623157e+308");
assertEq(String(-Number.MAX_VALUE), "-1.7976931348623157e+308");

assertCanonicalNumericIndexString("1.7976931348623157e+308");
assertCanonicalNumericIndexString("-1.7976931348623157e+308");

assertNotCanonicalNumericIndexString("1.7976931348623157E+308");
assertNotCanonicalNumericIndexString("-1.7976931348623157E+308");




assertCanonicalNumericIndexString("Infinity");
assertCanonicalNumericIndexString("-Infinity");
assertCanonicalNumericIndexString("NaN");



assertNotCanonicalNumericIndexString("+Infinity");
assertNotCanonicalNumericIndexString("+NaN");
assertNotCanonicalNumericIndexString("-NaN");
