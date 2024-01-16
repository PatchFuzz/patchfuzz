







function test() {
    var a = 1;
    {
        a; 
        function f1() { }
        a; 
    }
    a;
}

test();
WScript.Echo("PASSED")