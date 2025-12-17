function test() {
    var a = 1;
    {
        a; 
        function f() { }
        eval("f()");
        a; 
    }
    a;
}

test();
print("PASSED")