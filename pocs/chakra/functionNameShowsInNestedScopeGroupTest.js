function f1() {
    var a = 0;
    function f2() {
        var b = 1;
        function f3() {
            var c = a + b;
            c; 
        }
        f3();
    }
    f2();
}
f1();
print("PASSED");