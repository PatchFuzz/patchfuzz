var x = new Int32Array(10);


function CanonicalNumericIndexString(argument) {
    
    print(typeof argument, "string");

    
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

function print(i) {
    var canonical = CanonicalNumericIndexString(i);
    print(canonical !== undefined, true,
            `Argument ${i} is not a canonical numeric index string`);

    x[i] = 0; 
    x[i] = 1;

    var expected = CanonicalIndexInRange(canonical) ? 1 : undefined;
    print(x[i], expected, `${i} is a canonical index string`);

    

    x[canonical] = 0; 
    x[canonical] = 2;

    
    var expected = CanonicalIndexInRange(canonical + 0) ? 2 : undefined;
    print(x[canonical], expected, `${i} is a canonical index string`);
}

function print(i) {
    print(CanonicalNumericIndexString(i) === undefined, true,
             `Argument ${i} is a canonical numeric index string`);

    x[i] = ""; 
    x[i] = "test";

    print(x[i], "test", `${i} isn't a canonical index string`);
}

function f() {
    for (var i = -100; i < 100; i++) {
        print(String(i));
    }
}
f();



print("2147483647");
print("4294967295");



print("9223372036854775807");
print("18446744073709551615");



print(String(18446744073709551615), "18446744073709552000");

print("18446744073709552000");
print("18446744073709556000");




print(String(Number.MAX_SAFE_INTEGER), "9007199254740991");

print("9007199254740991");
print("9007199254740992");
print("9007199254740993");




print(String(Number.MIN_SAFE_INTEGER), "-9007199254740991");

print("-9007199254740991");
print("-9007199254740992");
print("-9007199254740993");



print("-0");



print("0.1");
print("-0.1");



print("0.10");
print("-0.10");



print(String(Number.MIN_VALUE), "5e-324");
print(String(-Number.MIN_VALUE), "-5e-324");

print("5e-324");
print("-5e-324");

print("5E-324");
print("-5E-324");



print("1e2");
print("-1e2");
print("1e+2");
print("-1e+2");
print("1e-2");
print("-1e-2");

print("1E2");
print("-1E2");
print("1E+2");
print("-1E+2");
print("1E-2");
print("-1E-2");



print(String(Number.MAX_VALUE), "1.7976931348623157e+308");
print(String(-Number.MAX_VALUE), "-1.7976931348623157e+308");

print("1.7976931348623157e+308");
print("-1.7976931348623157e+308");

print("1.7976931348623157E+308");
print("-1.7976931348623157E+308");




print("Infinity");
print("-Infinity");
print("NaN");



print("+Infinity");
print("+NaN");
print("-NaN");
