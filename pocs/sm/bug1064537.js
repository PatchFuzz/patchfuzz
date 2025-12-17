function test(a) {
    return (a)?a:0;
}
function test2(a) {
    return (a)?0:a;
}

function isNegativeZero(x) {
    return x===0 && (1/x)===-Infinity;
}

test(0)
print(isNegativeZero(test(-0)), false)
print(isNegativeZero(test(-0)), false)
print(isNegativeZero(test2(-0)), true)
print(isNegativeZero(test2(-0)), true)
