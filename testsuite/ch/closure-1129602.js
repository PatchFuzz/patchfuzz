




function test0() {
    var loopInvariant = 2;
    var func2 = function () {
        function func5() {
        }
        loopInvariant;
        {
            function __f() {
                WScript.Echo('pass');
            }
            function __g() {
                __f();
            }
            __g();
        }
    };
    func2();
}
test0();
