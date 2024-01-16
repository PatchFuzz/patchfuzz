


















WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "MayHaveSideEffectOnNode() should not cause a stack overflow nor should fail to \
terminate",
        body: function () {
            eval("var a;a>(" + Array(2 ** 15).fill(0).join(",") + ");");
            eval("var a;a===(" + Array(2 ** 15).fill(0).join(",") + ");");
        }
    }
]

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });