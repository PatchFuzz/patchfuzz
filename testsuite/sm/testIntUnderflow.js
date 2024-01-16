function testIntUnderflow() {
    
    var ival = -2147483648 + 8;
    for (var i = 0; i < 30; i++) {
        ival -= 2;
    }
    return (ival > -2147483648);
}
assertEq(testIntUnderflow(), false);
