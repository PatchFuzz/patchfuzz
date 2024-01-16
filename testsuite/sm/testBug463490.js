
function testBug463490() {
    function f(a, b, d) {
        for (var i = 0; i < 10; i++) {
            if (d)
                b /= 2;
        }
        return a + b;
    }
    
    f(2, 2, false);
    
    f(3, 4.5, false);
    
    f(2, 2, true);
    return true;
};
assertEq(testBug463490(), true);
