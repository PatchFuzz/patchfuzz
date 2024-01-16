





function foo() {
    var f1;
    function g() {
        x = f1; 
    }
    g();
}
foo();
WScript.Echo("PASSED");