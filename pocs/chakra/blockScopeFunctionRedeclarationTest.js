function test0() {
    if (0) { }
    else {
        function test1(a) {
            return a;
        }
        function test1(a) {
            return a;
        }

        test1();
        
    }
};

test0();

print("PASSED")