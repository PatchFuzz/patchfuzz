


function moduloWithNegativeZeroDividend(a, b, c)
{
    var temp = a * b;
    return temp % c;
}
noInline(moduloWithNegativeZeroDividend);


for (var i = 1; i < 1e4; ++i) {
    var result = moduloWithNegativeZeroDividend(i, 5, 5);
    if (result !== 0)
        throw "moduloWithNegativeZeroDividend(i, 5, 5), returned: " + result;
}

for (var i = 1; i < 1e4; ++i) {
    
    var result = moduloWithNegativeZeroDividend(-i, 0, 2);
    if (!(result === 0 && (1/result) === -Infinity))
        throw "moduloWithNegativeZeroDividend(-i, 0, 2) failed, returned: " + result;

    
    var result = moduloWithNegativeZeroDividend(-i, 5, 5);
    if (!(result === 0 && (1/result) === -Infinity))
        throw "moduloWithNegativeZeroDividend(-i, 5, 5) failed, returned: " + result;
}


for (var i = 1; i < 1e4; ++i) {
    var result = moduloWithNegativeZeroDividend(-i, 0, Infinity);
    if (!(result === 0 && (1/result) === -Infinity))
        throw "moduloWithNegativeZeroDividend(-i, 0, Infinity) failed, returned: " + result;

    var result = moduloWithNegativeZeroDividend(-i, 0, -Infinity);
    if (!(result === 0 && (1/result) === -Infinity))
        throw "moduloWithNegativeZeroDividend(-i, 0, -Infinity) failed, returned: " + result;

    var result = moduloWithNegativeZeroDividend(-i, 0, NaN);
    if (result === result)
        throw "moduloWithNegativeZeroDividend(-i, 0, NaN) failed, returned: " + result;
}



function moduloWithUnusedNegativeZeroDividend(a, b, c)
{
    var temp = a * b;
    return (temp % c) | 0;
}
noInline(moduloWithUnusedNegativeZeroDividend);

for (var i = 1; i < 1e4; ++i) {
    var result = moduloWithUnusedNegativeZeroDividend(i, 5, 5);
    if (result !== 0)
        throw "moduloWithUnusedNegativeZeroDividend(i, 5, 5), returned: " + result;
}


for (var i = 1; i < 1e4; ++i) {
    var result = moduloWithUnusedNegativeZeroDividend(-i, 0, 2);
    if (!(result === 0 && (1/result) === Infinity))
        throw "moduloWithUnusedNegativeZeroDividend(-i, 0, 2) failed, returned: " + result;
}

for (var i = 1; i < 1e4; ++i) {
    var result = moduloWithUnusedNegativeZeroDividend(-i, 0, Infinity);
    if (!(result === 0 && (1/result) === Infinity))
        throw "moduloWithUnusedNegativeZeroDividend(-i, 0, Infinity) failed, returned: " + result;

    var result = moduloWithUnusedNegativeZeroDividend(-i, 0, -Infinity);
    if (!(result === 0 && (1/result) === Infinity))
        throw "moduloWithUnusedNegativeZeroDividend(-i, 0, -Infinity) failed, returned: " + result;

    var result = moduloWithUnusedNegativeZeroDividend(-i, 0, NaN);
    if (result !== 0)
        throw "moduloWithUnusedNegativeZeroDividend(-i, 0, NaN) failed, returned: " + result;
}



function moduloWithNegativeZeroDivisor(a, b, c)
{
    var temp = a * b;
    return c % temp;
}
noInline(moduloWithNegativeZeroDivisor);


for (var i = 1; i < 1e4; ++i) {
    var result = moduloWithNegativeZeroDivisor(i, 2, i);
    if (result !== i)
        throw "moduloWithNegativeZeroDividend(i, 2, i), returned: " + result;

    var result = moduloWithNegativeZeroDivisor(-i, 2, i);
    if (result !== i)
        throw "moduloWithNegativeZeroDividend(-i, 2, i), returned: " + result;
}


for (var i = 1; i < 1e4; ++i) {
    var result = moduloWithNegativeZeroDivisor(-i, 0, 2);
    if (result === result)
        throw "moduloWithNegativeZeroDivisor(-i, 0, 2) failed, returned: " + result;
}