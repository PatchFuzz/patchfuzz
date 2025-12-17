function test() {
    function inner() {
        (function f() { eval(""); })();
    }
    inner();
}
test();
print("passed");
