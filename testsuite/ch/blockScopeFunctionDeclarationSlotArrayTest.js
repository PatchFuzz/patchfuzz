







function test() {
    var a = 1;
    {
        a; 
        function f() { }
        function g() {
            f();
        }
        g();
        a; 
    }
    a;
}

test();
WScript.Echo("PASSED")