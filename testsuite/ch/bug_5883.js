




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "#5883 - instanceof on a bound function fails to call [Symbol.hasInstance] accessor",
        body: function () {
            let called = false;
            class A {
                static [Symbol.hasInstance]() {
                    called = true;
                }
            }
            const B = A.bind();

            ({} instanceof B);
            assert.isTrue(called);
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
