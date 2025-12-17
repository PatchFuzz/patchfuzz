enableOsiPointRegisterChecks();

function convertToInt(str) {
    return str | 0;
}

function convertToIntOnTrace(str) {
    var z;
    for (var i = 0; i < 9; ++i) {
        z = str | 0;
    }
    return z;
}

function convertToDouble(str) {
    return str * 1.5;
}

function convertToDoubleOnTrace(str) {
    var z;
    for (var i = 0; i < 9; ++i) {
        z = str * 1.5;
    }
    return z;
}

print(convertToInt("0x10"), 16);
print(convertToInt("-0x10"), 0);

print(convertToIntOnTrace("0x10"), 16);
print(convertToIntOnTrace("-0x10"), 0);

print(convertToDouble("0x10"), 24);
print(convertToDouble("-0x10"), NaN);

print(convertToDoubleOnTrace("0x10"), 24);
print(convertToDoubleOnTrace("-0x10"), NaN);
