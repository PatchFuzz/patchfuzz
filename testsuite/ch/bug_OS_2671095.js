




function test() {
    function inner() {
        (function f() { eval(""); })();
    }
    inner();
}
test();
WScript.Echo("passed");
