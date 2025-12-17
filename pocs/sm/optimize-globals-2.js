function testNaN(x) {
    var x = NaN;
    print(isNaN(x), true);
}
testNaN();

function testInfinity(x) {
    return (x === Infinity);
}
print(testInfinity(Infinity), true);
print(testInfinity(6), false);
print(testInfinity(-Infinity), false);

function testUndefined(x) {
    return (x === undefined);
}
print(testUndefined(undefined), true);
print(testUndefined(), true);
print(testUndefined(5), false);
