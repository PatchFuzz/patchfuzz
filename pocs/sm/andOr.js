function testBooleans(a, b) {
    var res = 0;
    if (a && b) res += 2;
    if (b || a) res += 1;
    return res;
}
print(testBooleans(false, false), 0);
print(testBooleans(false, true), 1);
print(testBooleans(true, false), 1);
print(testBooleans(true, true), 3);

function testShortCircuit(a) {
    var b = 0;
    ++a && a++;
    a || (b = 100);
    return a + b;
}
print(testShortCircuit(0), 2);
print(testShortCircuit(-2), 100);
print(testShortCircuit(-1), 100);

function testValues(a, b) {
    if (a && b) return 2;
    if (b || a) return 1;
    return 0;
}
print(testValues(false, true), 1);
print(testValues("foo", 22), 2);
print(testValues(null, ""), 0);
print(testValues(Math.PI, undefined), 1);
print(testValues(Math.abs, 2.2), 2);
