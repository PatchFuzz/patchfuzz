




function test0() {
    (function () {
        function foo() {
            eval("");
        };
    })();
    {
        var x = 1;
        function bar() {}
        function bar() { return 1;}
    }
};
test0();

WScript.Echo("PASS");
